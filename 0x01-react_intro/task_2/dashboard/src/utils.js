export function getFullYear () {
    let d = new Date();
    return d.getFullYear();
}

export function getFooterCopy (isIndex=true) {
    if (isIndex) {
        let result="Holberton School";
        return result;
    } else  {
        let result="Holberton School main dashboard";
        return result;
    }
}

export function getLatestNotification () {
    let result ='<strong>Urgent requirement</strong> - complete by EOD';
    return result
}