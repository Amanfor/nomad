import re

with open('src/components/NomadApp.tsx', 'r') as f:
    content = f.read()

# 1. Add states
content = content.replace(
    "const [isBrowsingConcepts, setIsBrowsingConcepts] = useState(false);",
    "const [isBrowsingConcepts, setIsBrowsingConcepts] = useState(false);\n  const [isBrowsingQuestions, setIsBrowsingQuestions] = useState(false);\n  const [targetBrowseResults, setTargetBrowseResults] = useState<any[]>([]);"
)

# 2. Update Escape handler
content = content.replace(
    "if (selected || selectedQuestion || isBrowsingConcepts) {",
    "if (selected || selectedQuestion || isBrowsingConcepts || isBrowsingQuestions) {"
)

# 3. Update handleBack
content = content.replace(
    "setIsBrowsingConcepts(false);",
    "setIsBrowsingConcepts(false);\n    setIsBrowsingQuestions(false);"
)

# 4. Inject Browse All Option
old_results = """    if (isTargetMode && questionFuse) {
      return questionFuse.search(deferredQuery).map(r => r.item).slice(0, 6);
    }"""

new_results = """    if (isTargetMode && questionFuse) {
      const qResults = questionFuse.search(deferredQuery).map(r => r.item);
      if (qResults.length > 0) {
        const browseAllItem = {
          isBrowseAll: true,
          id: 'browse-all',
          chapter: `VIEW ALL MATCHES FOR "${deferredQuery.toUpperCase()}"`,
          topic: `${qResults.length} questions found`,
          questions: qResults
        };
        return [browseAllItem, ...qResults].slice(0, 7);
      }
      return [];
    }"""
content = content.replace(old_results, new_results)

# 5. Handle Pseudo-item in handleSelect
old_handle_select = """  const handleSelect = async (item: any) => {
    setIsBlinking(false);
    setIsMultiEye(false);
    const wasBrowsing = isBrowsingConcepts;
    setIsBrowsingConcepts(false);
    setIsTyping(false);"""

new_handle_select = """  const handleSelect = async (item: any) => {
    if (item.isBrowseAll) {
      setTargetBrowseResults(item.questions);
      setIsBrowsingQuestions(true);
      setIsBrowsingConcepts(false);
      setQuery('');
      return;
    }

    setIsBlinking(false);
    setIsMultiEye(false);
    const wasBrowsing = isBrowsingConcepts || isBrowsingQuestions;
    setIsBrowsingConcepts(false);
    setIsBrowsingQuestions(false);
    setIsTyping(false);"""
content = content.replace(old_handle_select, new_handle_select)

# 6. Build Question Browser UI
old_render = """          {!isBrowsingConcepts ? ("""
new_render = """          {!isBrowsingConcepts && !isBrowsingQuestions ? ("""
content = content.replace(old_render, new_render)

old_browse = """            </motion.div>
          )}
        </motion.div>"""

new_browse = """            </motion.div>
          ) : isBrowsingQuestions ? (
            <motion.div 
              className="nomad-browse-container"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ width: '100%', marginTop: isMobile ? '-1rem' : '2rem', flex: 1, overflowY: 'auto', paddingRight: '0.5rem', paddingBottom: '4rem', scrollbarWidth: 'none' }}
            >
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
                <button className="nomad-btn" onClick={() => setIsBrowsingQuestions(false)}>⟨ exit ⟩</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {targetBrowseResults.map((q, i) => (
                  <div 
                    key={q.id || i}
                    onClick={() => handleSelect(q)}
                    style={{
                      padding: '1rem',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: renderInlineLatex(q.question.length > 60 ? q.question.substring(0, 60) + '...' : q.question) }} />
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{q.chapter} · {q.topic}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </motion.div>"""
# be careful about replacing old_browse, it might match multiple places
# so we replace only the last occurrence that matches the browse container closing

content = content.replace("          ) : (\n            <motion.div \n              ref={browseContainerRef}", "          ) : isBrowsingConcepts ? (\n            <motion.div \n              ref={browseContainerRef}")

content = content.replace(
"""                ))}
              </div>
            </motion.div>
          )}
        </motion.div>""",
"""                ))}
              </div>
            </motion.div>
          ) : isBrowsingQuestions ? (
            <motion.div 
              className="nomad-browse-container"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ width: '100%', marginTop: isMobile ? '-1rem' : '2rem', flex: 1, overflowY: 'auto', paddingRight: '0.5rem', paddingBottom: '4rem', scrollbarWidth: 'none' }}
            >
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
                <button className="nomad-btn" onClick={() => setIsBrowsingQuestions(false)}>⟨ exit ⟩</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {targetBrowseResults.map((q, i) => (
                  <div 
                    key={q.id || i}
                    onClick={() => handleSelect(q)}
                    style={{
                      padding: '1rem',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: renderInlineLatex(q.question.length > 60 ? q.question.substring(0, 60) + '...' : q.question) }} />
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{q.chapter} · {q.topic}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </motion.div>"""
)


with open('src/components/NomadApp.tsx', 'w') as f:
    f.write(content)

