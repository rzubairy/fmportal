const tableData = JSON.parse(
  `[{
  "id": 0,
  "key": 0,
  "data": "Fuel",
  "status": "43%"
  }, {
  "id": 1,
  "key": 1,
  "data": "Odometer",
  "status": "243,475 mi"
}, {
  "id": 2,
  "key": 2,
  "data": "Engine Hours",
  "status": "4875 hrs"
}, {
  "id": 3,
  "key": 3,
  "data": "Engine",
  "status": "Good"
}, {
  "id": 4,
  "key": 4,
  "data": "Battery Voltage",
  "status": "23.5V"
}]`,
);
const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * (-1);
    }
    return sortVal;
  }
}
export default fakeData;
