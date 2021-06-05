class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(callback) {
    setInterval(() => {this.currentTime += 1}, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(value) {
    if (value < 10) { 
      let result = "0" + value.toString();
      return result;
    }
    return value.toString(); 
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return minutes + ':' + seconds;
  }
}
