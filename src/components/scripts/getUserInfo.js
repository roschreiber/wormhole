import { getDeviceId } from './idUtils.js';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

export function getUserInfo() {
  const deviceId = getDeviceId();
  
  const avatarUrl = `https://api.dicebear.com/7.x/lorelei/svg?seed=${deviceId}`;
  
  const username = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    seed: deviceId,
    style: "capital",
    separator: "",
  });

  console.log('User info generated:', { deviceId, username, avatarUrl });
  
  return {
    deviceId,
    username,
    avatarUrl
  };
}