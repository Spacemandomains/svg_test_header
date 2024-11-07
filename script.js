document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('g').forEach(function(group) {
      // Create an <svg> element
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      
      // Set the necessary attributes for the <svg> element
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', 'auto');
      
      // Move the <g> element inside the <svg>
      group.parentNode.insertBefore(svg, group);
      svg.appendChild(group);
    });
  });
  