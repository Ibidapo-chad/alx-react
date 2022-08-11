export function getFullYear () {
    let d = new Date();
    return d.getFullYear();
}

export function getFooterCopy (isIndex = true) {
    if (isIndex) {
        return console.log( "Holberton School" )
    } else  {
        return console.log( "Holberton School main dashboard" )
    }
}