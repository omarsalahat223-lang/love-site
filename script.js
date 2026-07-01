const reasons=["لأن ابتسامتك تنير يومي.","لأنك أماني وسندي.","لأنك تجعلين الحياة أجمل.","لأنك تفهمينني دون كلام.","لأنك وطني المفضل.","لأنني أحبك كما أنت."];
let i=0;function nextReason(){reason.textContent=reasons[i%reasons.length];i++;}
const startDays=1193;function upd(){const now=new Date();counter.innerHTML=`❤️ ${startDays} يوم معًا<br>⏰ ${Math.floor(startDays*24)} ساعة`; } upd();