let auto = {
   brand: "BMW",
   model: "X5",
   year: 2021,
   avgSpeed: 80,
   toString(){
    return`
       brand: ${this.brand},
       model: ${this.model},
       year: ${this.year},
       avgSpeed: ${this.avgSpeed}
    `
   },
   calculateDriveTime(distance){
    return distance / this.avgSpeed
   }
}

alert(auto.calculateDriveTime(240))