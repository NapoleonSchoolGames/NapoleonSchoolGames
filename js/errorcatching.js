window.onerror = function(message, source, lineno, colno, error) {
    alert("Error: " + message + "\nLine: " + lineno + "\nColumn: " + colno + "\nSource: " + source);
    return true;
  }