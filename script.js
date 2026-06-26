/**
 * ==========================================================================
 * Ashwin-Sundar Portfolio System Engine - v2.0 Matrix
 * ==========================================================================
 */

/**
 * Core Process: Form Submission & Dynamic DOM Injection
 * Captures, sanitizes, formats, and updates the Peer Review Matrix wall.
 */
function addRecommendation() {
  // 1. Target telemetry nodes for data capture
  const recTextArea = document.getElementById("new_recommendation");
  const nameInput = document.getElementById("rec_name");
  
  // 2. Cross-Browser Defensive Validation Check
  if (recTextArea && recTextArea.value.trim() !== "") {
    console.log("Systems Telemetry: New recommendation payload verified.");
    
    // 3. Trigger sleek verification animation modal
    showPopup(true);

    // 4. Dynamic Node Construction (Matches v2.0 HTML formatting perfectly)
    const cardElement = document.createElement("div");
    cardElement.className = "recommendation";
    
    // Extract input strings safely
    const messagePayload = recTextArea.value.trim();
    const authorPayload = nameInput && nameInput.value.trim() !== "" ? nameInput.value.trim() : "Anonymous Peer";

    // 5. Structure payload with precise typography wrappers
    cardElement.innerHTML = `
      <span>&#8220;</span>
      <p>${messagePayload}</p>
      <small style="display: block; margin-top: 15px; color: var(--accent-gold); font-weight: 600; font-style: normal;">
        — ${authorPayload}
      </small>
    `;
    
    // 6. DOM Tree Insertion: Append new card node smoothly to the tracker wall
    document.getElementById("all_recommendations").appendChild(cardElement); 
    
    // 7. State Reset: Purge active viewports for subsequent transmissions
    recTextArea.value = "";
    if (nameInput) nameInput.value = "";
  } else {
    console.warn("Systems Telemetry: Rejecting empty submission block.");
  }
}

/**
 * Interface Core: UI Modal Controls
 * Leverages class toggles instead of hardcoded strings to preserve CSS transitions.
 */
function showPopup(activate) {
  const popupModal = document.getElementById('popup');
  if (popupModal) {
    if (activate) {
      popupModal.classList.add('active'); // Triggers smooth CSS slide & fade animation
    } else {
      popupModal.classList.remove('active'); // Clean dismiss
    }
  }
}