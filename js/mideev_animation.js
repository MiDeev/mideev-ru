document.body.onload = () => {
    animateChildrenRecursively(document.body)
  }
  
  function animateChildrenRecursively(root) {
    const children = [...root.children]
    
    children.forEach(animateChildrenRecursively)
    
    children.filter(x => x.hasAttribute('data-animated')).forEach(x => {
      const timeout = x.getAttribute('data-timeout')
      const intervalMs = x.getAttribute('data-interval')
      const initialValue = x.innerText
      x.innerText = ''
      
      const text = [...initialValue].map(x => x == ' ' ? '\xa0' : x)
      text.reverse()
      
      setTimeout(() => {
        const interval = setInterval(() => {
          if (x.innerText.length >= initialValue.length)
            return clearInterval(interval)
  
          x.innerText += text.pop()
        }, intervalMs ? +intervalMs : 300)
      }, timeout ? +timeout : 0)
    })
  }