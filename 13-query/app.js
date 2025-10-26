function getQuery(params) {
    if (!params) return '';

    const result = Object.keys(params).reduce((acc, key) => {
        acc.push(`${key}=${params[key]}`);
        return acc;
    }, []);
    
    return result.join('&');
}

const params = {
    search: 'Вася',
    take: 10,
}

console.log(getQuery(params)); // 'search=Вася&take=10' 