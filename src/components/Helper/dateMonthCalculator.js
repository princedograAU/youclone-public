export const dateMonthCalculator = date => {
    /**
     * Returns video released Year/Month/day/hours/minutes 
     */
  
    const releaseDate = new Date(date);
    const currentDate = new Date();
    if (!(currentDate.getFullYear() - releaseDate.getFullYear())) {
      if (!(currentDate.getMonth() - releaseDate.getMonth())){
        return `${currentDate.getMinutes() - releaseDate.getMinutes()} minutes`;
      } else {
        return `${currentDate.getMonth() - releaseDate.getMonth()} months`;
      }
    } else {
      return `${currentDate.getFullYear() - releaseDate.getFullYear()} year` ;
    }
  }