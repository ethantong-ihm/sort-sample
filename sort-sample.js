const records = [
    { name: 'Bobby', age: 10},
    { name: null, age: 8},
    { name: 'Adam', age: null},
    { name: 'Jesse', age: 9}
]

/** facade sorting function */
const sortRecords = (records, key, asc) => {
    const coefficient = asc ? 1 : -1
    const compareByAtt = (r1, r2) => {
        const [accessAtt, compareFn] = fnMap[key]

        const r1Att = accessAtt(r1)
        const r2Att = accessAtt(r2)

        if (!r1Att && !r2Att) return 0
        else if (!r1Att) return -1 * coefficient
        else if (!r2Att) return 1 * coefficient
        return compareFn(r1Att, r2Att) * coefficient
    }
    return records.sort(compareByAtt)
}

/** attribute accessors */
const accessName = (record) => record.name
const accessAge = (record) => record.age

/** compare functions */
const compareString = (s1, s2) => s1.localeCompare(s2)
const compareNumber = (n1, n2) => n1 - n2

/** map key to functions */
const fnMap = {
    name: [accessName, compareString],
    age: [accessAge, compareNumber]
}

/** run */
console.log('sort by name, asc')
console.log(sortRecords(records, 'name', true))
console.log('sort by age, desc')
console.log(sortRecords(records, 'age', false))