function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }
    const sortedstr1 = str1.split('').sort().join('');
    const sortedstr2 = str2.split('').sort().join('');

    return sortedstr1 === sortedstr2;
}

console.log(areAnagrams("rail safety", "fairy tales"))
console.log(areAnagrams("hello", "bye"))
console.log(areAnagrams("Hi there", "Bye there"))