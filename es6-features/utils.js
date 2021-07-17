export default function SinhVien(fullName, className) {
    this.fullName = fullName;
    this.className = className;
}

const getLocalStorage = () => {
    console.log('getLocalStorage');
}

const setLocalStorage = () => {
    console.log('setLocalStorage');
}

export {
    getLocalStorage, // getLocalStorage: getLocalStorage
    setLocalStorage
}