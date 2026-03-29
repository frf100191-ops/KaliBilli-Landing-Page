/**
 * OpenSource 2025 AeroX
 * Code by itsfizys
 * AeroX Development
 * 
 * Kali Billi Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite Kali Billi"
  botInviteUrl: "https://discord.com/api/oauth2/authorize?client_id=https://kali-billi-landing-page.vercel.app/&permissions=8&scope=bot",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/UmY8mMewA4",
  
  // Bot name (for display)
  botName: "Security X",
  
  // Bot description
  botDescription: "Your Global Discord Security System - Antinuke, Automod and Moderation for your Discord server."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
