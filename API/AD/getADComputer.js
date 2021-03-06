function toUACstring(dec) {
  switch(dec){
    case 1:
      return 'SCRIPT';
    case 2:
      return 'ACCOUNTDISABLE';
    case 8:
      return 'HOMEDIR_REQUIRED';
    case 16:
      return 'LOCKOUT';
    case 32:
      return 'PASSWD_NOTREQD';
    case 64:
      return 'PASSWD_CANT_CHANGE';
    case 128:
      return 'ENCRYPTED_TEXT_PWD_ALLOWED';
    case 256:
      return 'TEMP_DUPLICATE_ACCOUNT';
    case 512:
      return 'NORMAL_ACCOUNT';
    case 2048:
      return 'INTERDOMAIN_TRUST_ACCOUNT';
    case 4096:
      return 'WORKSTATION_TRUST_ACCOUNT';
    case 8192:
      return 'SERVER_TRUST_ACCOUNT';
    case 65536:
      return 'DONT_EXPIRE_PASSWORD';
    case 131072:
      return 'MNS_LOGON_ACCOUNT';
    case 262144:
      return 'SMARTCARD_REQUIRED';
    case 524288:
      return 'TRUSTED_FOR_DELEGATION';
    case 1048576:
      return 'NOT_DELEGATED';
    case 2097152:
      return 'USE_DES_KEY_ONLY';
    case 4194304:
      return 'DONT_REQ_PREAUTH';
    case 8388608:
      return 'PASSWORD_EXPIRED';
    case 16777216:
      return 'TRUSTED_TO_AUTH_FOR_DELEGATION';
    case 67108864:
      return 'PARTIAL_SECRETS_ACCOUNT';
    default:
      return 'UNKNOWN_ATTRIBUTE_' + dec.toString();
  }
}

function parseUAC(uac) {
  let bin = (uac).toString(2);
  return bin.split('').reverse().reduce(function(uacAttrib,bit,place){
    if(bit == 1){ //first time type conversion is useful :)

      uacAttrib.push(toUACstring(1 << place));
    }
    return uacAttrib;
  },[]);
}

export default function findAD(ad,baseDN) {
  return new Promise(function(resolve, reject) {
    if(!ad){
      reject(Error("No AD Connection!"));
    }

    let opts = {
      filter: 'objectClass=computer',
      attributes: ['dn','cn','operatingSystem','userAccountControl']
    };

    if(baseDN){
      opts.baseDN = baseDN;
    }

    ad.find(opts,(e,res) => {
      if(e){
        reject(Error(e));
      }
      if(res.other){
        var machines = res.other.map((pc) => {
          return {
            name: pc.cn,
            OS: pc.operatingSystem,
            UAC: parseUAC(Number(pc.userAccountControl))
          };
        }).filter((pc) => {
          return (pc.UAC.indexOf('ACCOUNTDISABLE') && pc.OS !== 'unknown');
        });
        resolve(machines);
      } else {
        resolve({});
      }
    });
  });
}
