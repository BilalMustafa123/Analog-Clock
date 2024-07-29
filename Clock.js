setInterval ( () => {
   date = new Date();
   console.log(date)
   htime = date.getHours();
   mtime = date.getMinutes();
   stime = date.getSeconds();

   hrotation = 30*htime + mtime/2;
   mrotation = 6*mtime;
   srotation = 6*stime;

   hour.style.transform = `rotate(${hrotation}deg)`;
   mins.style.transform = `rotate(${mrotation}deg)`;
   secs.style.transform = `rotate(${srotation}deg)`;
   
}, 1000);