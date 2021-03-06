function countSmileys(arr) {
    if ( arr.length === 0 )  { 
      return 0;
    }
    let res = 0;
    let validSmileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
    for (let face of arr) { 
      if (validSmileys.includes(face)) { 
        res++;
      }
    }
    return res;
    }
    
console.log(countSmileys([";~D",":o>",";~)",":)",";~>",":(",";D",":D",";D",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]))
    