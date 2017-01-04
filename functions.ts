//Created by: Klezo
  /*
  @start-start window px,
  @target-target window px
   */
  private scrollTimer(start,target):void {
      //interval : VALUE OF ONE STEP

      var interval = 10;
      var scrollTo : number = start;
      var duration : number = 300;
      var current : number = 0;

      this.timer = Observable.timer(0,interval);

    this.sub = this.timer.subscribe(t=> {
        scrollTo = this.easing(current,start,target-start,duration);
        current += interval;

        if (Math.abs(scrollTo-target)>10){
          window.scrollTo(0, scrollTo);
        }
        else {
          window.scrollTo(0, target);
          this.sub.unsubscribe();
        }
      });
  }
  /*
   @t - current step
   @b - begin value
   @c - change (start-target)
   @d - final step
   TO CHANGE EQUATION : http://gizma.com/easing/#circ2
   ANIMATION : http://easings.net/#easeOutCirc
   UNDERSTANDING : http://upshots.org/actionscript/jsas-understanding-easing
   */
  private easing(t, b, c, d) : number{
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
  }
