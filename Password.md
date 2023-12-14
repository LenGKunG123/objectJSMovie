function password(str) {
    if(str.length < 8){
      return false;
    }

    if(!str.match(/[a-z]/)){
      return false
    }

    if(!str.match(/[A-Z]/)){
      return false
    }
    if(!str.match(/[0-9]/)){
      return false
    }
    return true
}
