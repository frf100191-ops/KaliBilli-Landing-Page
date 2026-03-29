/**
 * OpenSource 2025 AeroX
 * Code by itsfizys
 * AeroX Development
 * 
 * Kali Billi Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Kali Billi Bot invite link - users will be redirected here when clicking "Invite Bot"
  botInviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1485896423848284240&permissions=8&scope=bot",
  
  // CupidX Bot invite link - users will be redirected here when clicking "Invite CupidX"
  cupidXInviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1461333665811271723&permissions=8&scope=bot",
  
  // Security X Bot invite link - users will be redirected here when clicking "Invite Security X"
  securityXInviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1485896423848284240&permissions=8&scope=bot",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/UmY8mMewA4",
  
  // Bot name (for display)
  botName: "CupidX Development",
  
  // Bot description
  botDescription: "Support server for CupidX and Security X discord bots"
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
