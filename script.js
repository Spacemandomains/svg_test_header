document.addEventListener("DOMContentLoaded", function() {
    // Select all <g> tags
    document.querySelectorAll('g').forEach(function(group) {
      // Create an <svg> element
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  
      // Set necessary attributes for the <svg> element
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', '100%');  // You can set a specific width if needed
      svg.setAttribute('height', 'auto'); // Or set a fixed height if needed
      svg.setAttribute('viewBox', '0 0 100 100'); // Adjust the viewBox to fit your content
  
      // Insert the <svg> element before the <g> element
      group.parentNode.insertBefore(svg, group);
  
      // Move the <g> element inside the <svg>
      svg.appendChild(group);
  
      // Ensure visibility and block-level display
      svg.style.display = 'block';
      svg.style.backgroundColor = 'transparent'; // Optional: Add a background color if needed
      group.setAttribute('style', 'visibility: visible; display: block;');
    });
  });
  