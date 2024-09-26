// let style = ["jazz", "Blues"]

// Styles.push("Rock-n-Roll")
// console.log(`2.${styles}`)

// //styles[1] = "classic"
// styles[Math.floor(styles.length / 2)] = "Classic"
// console.log(`3.${styles}`)

// let firstElements = styles.shift()
// alert(firstElements)
// console.log(`4.${styles}`)

// styles.unshift("Reggae")
// styles.unshift("Rap")
// console.log(`5${styles}`)

  function sumInput() {
      let arr = []
      let num
      do{
      let num = prompt("Введите число")
      if (+num && (+num || num === "0")) arr.push(+num)
     }while(+num && (+num || num === "0"))
  let result = 0
  for (item of arr){
     result += item
   }
   return result
}1

sunInput()