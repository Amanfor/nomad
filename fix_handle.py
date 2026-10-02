import re

with open('src/components/NomadApp.tsx', 'r') as f:
    content = f.read()

old_hs = """  const handleSelect = async (item: any) => {
    setIsBlinking(false);
    setIsMultiEye(false);
    const wasBrowsing = isBrowsingConcepts;
    setIsBrowsingConcepts(false);
    setIsBrowsingQuestions(false);
    setIsTyping(false);"""

new_hs = """  const handleSelect = async (item: any) => {
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

content = content.replace(old_hs, new_hs)

with open('src/components/NomadApp.tsx', 'w') as f:
    f.write(content)
