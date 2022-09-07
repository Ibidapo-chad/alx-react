export function getFullYear () {
    let d = new Date();
    return d.getFullYear();
}

export function getFooterCopy (isIndex) {
    if (isIndex) {
        console.log( "Holberton School" )
    } else  {
        console.log( "Holberton School main dashboard" )
    }
}