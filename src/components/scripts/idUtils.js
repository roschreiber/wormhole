export function getDeviceId() {
  
  let deviceId = localStorage.getItem('deviceId');
  
  if (!deviceId) {
    deviceId = Date.now().toString(36) + Math.random().toString(36).substring(2);
    
    localStorage.setItem('deviceId', deviceId);
    console.log('Generated new deviceId:', deviceId);
  }
  
  return deviceId;
}