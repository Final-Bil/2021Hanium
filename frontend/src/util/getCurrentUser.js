export function getCurrentUser() {
    if(!localStorage.getItem('ACCESS_TOKEN')) {
        console.log('false')
        return false;
    }
    else {
        console.log('true')
        return true;
    }
}