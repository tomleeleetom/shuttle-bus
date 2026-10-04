// ============================================
// 駿景園 NR815 Shuttle Widget for Scriptable (iOS)
// 1. Install "Scriptable" from App Store (free)
// 2. Scriptable > + > paste this whole file > name it "Shuttle"
// 3. Long-press home screen > + > Scriptable > Medium widget
// 4. Long-press the widget > Edit Widget > Script = Shuttle
//    （一個 widget 同時顯示兩個方向，唔使填 Parameter）
// ============================================

const RA_WEEKDAY = [
"06:30","06:40","06:50","07:00","07:08","07:16","07:24","07:32",
"07:40","07:48","07:56","08:04","08:12","08:20","08:28","08:36",
"08:44","08:52","09:00","09:10","09:20","09:30","09:40","09:50",
"10:00","10:10","10:20","10:30","10:40","10:50","11:00","11:10",
"11:20","11:30","11:40","11:50","12:00","12:10","12:20","12:30",
"12:40","12:50","13:00","13:10","13:20","13:30","13:40","13:50",
"14:00","14:10","14:20","14:30","14:40","14:50","15:00","15:10",
"15:20","15:30","15:40","15:50","16:00","16:10","16:18","16:26",
"16:34","16:42","16:50","16:58","17:06","17:14","17:22","17:30",
"17:36","17:42","17:48","17:54","18:00","18:06","18:12","18:18",
"18:24","18:30","18:36","18:42","18:48","18:54","19:00","19:06",
"19:12","19:18","19:24","19:30","19:36","19:42","19:48","19:54",
"20:00","20:10","20:20","20:30","20:40","20:50","21:00","21:10",
"21:20","21:30","21:40","21:50","22:05","22:20","22:35","22:50"
];
const RA_HOLIDAY = [
"06:30","06:45","07:00","07:15","07:30","07:45","08:00","08:10",
"08:20","08:30","08:40","08:50","09:00","09:10","09:20","09:30",
"09:40","09:50","10:00","10:10","10:20","10:30","10:40","10:50",
"11:00","11:10","11:20","11:30","11:40","11:50","12:00","12:10",
"12:20","12:30","12:40","12:50","13:00","13:10","13:20","13:30",
"13:40","13:50","14:00","14:08","14:16","14:24","14:32","14:40",
"14:48","14:56","15:04","15:12","15:20","15:28","15:36","15:44",
"15:52","16:00","16:08","16:16","16:24","16:32","16:40","16:48",
"16:56","17:04","17:12","17:20","17:28","17:36","17:44","17:52",
"18:00","18:08","18:16","18:24","18:32","18:40","18:48","18:56",
"19:04","19:12","19:20","19:28","19:36","19:44","19:52","20:00",
"20:08","20:16","20:24","20:32","20:40","20:48","20:56","21:04",
"21:12","21:20","21:28","21:36","21:44","21:56","22:08","22:20",
"22:35","22:50"
];
const NTP_WEEKDAY = [
"06:40","06:50","07:00","07:10","07:18","07:26","07:34","07:42",
"07:50","07:58","08:06","08:14","08:22","08:30","08:38","08:46",
"08:54","09:02","09:10","09:20","09:30","09:40","09:50","10:00",
"10:10","10:20","10:30","10:40","10:50","11:00","11:10","11:20",
"11:30","11:40","11:50","12:00","12:10","12:20","12:30","12:40",
"12:50","13:00","13:10","13:20","13:30","13:40","13:50","14:00",
"14:10","14:20","14:30","14:40","14:50","15:00","15:10","15:20",
"15:30","15:40","15:50","16:00","16:10","16:20","16:28","16:36",
"16:44","16:52","17:00","17:08","17:16","17:24","17:32","17:40",
"17:46","17:52","17:58","18:04","18:10","18:16","18:22","18:28",
"18:34","18:40","18:46","18:52","18:58","19:04","19:10","19:16",
"19:22","19:28","19:34","19:40","19:46","19:52","19:58","20:04",
"20:10","20:20","20:30","20:40","20:50","21:00","21:10","21:20",
"21:30","21:40","21:50","22:00","22:15","22:30","22:45","23:00"
];
const NTP_HOLIDAY = [
"06:40","06:55","07:10","07:25","07:40","07:55","08:10","08:20",
"08:30","08:40","08:50","09:00","09:10","09:20","09:30","09:40",
"09:50","10:00","10:10","10:20","10:30","10:40","10:50","11:00",
"11:10","11:20","11:30","11:40","11:50","12:00","12:10","12:20",
"12:30","12:40","12:50","13:00","13:10","13:20","13:30","13:40",
"13:50","14:00","14:10","14:18","14:26","14:34","14:42","14:50",
"14:58","15:06","15:14","15:22","15:30","15:38","15:46","15:54",
"16:02","16:10","16:18","16:26","16:34","16:42","16:50","16:58",
"17:06","17:14","17:22","17:30","17:38","17:46","17:54","18:02",
"18:10","18:18","18:26","18:34","18:42","18:50","18:58","19:06",
"19:14","19:22","19:30","19:38","19:46","19:54","20:02","20:10",
"20:18","20:26","20:34","20:42","20:50","20:58","21:06","21:14",
"21:22","21:30","21:38","21:46","21:54","22:06","22:18","22:30",
"22:45","23:00"
];
const PUBLIC_HOLIDAYS = new Set(["2026-01-01", "2026-02-17", "2026-02-18", "2026-02-19", "2026-04-03", "2026-04-04", "2026-04-06", "2026-04-07", "2026-05-01", "2026-05-25", "2026-06-19", "2026-07-01", "2026-09-26", "2026-10-01", "2026-10-19", "2026-12-25", "2026-12-26", "2027-01-01", "2027-02-06", "2027-02-08", "2027-02-09", "2027-03-26", "2027-03-27", "2027-03-29", "2027-04-05", "2027-05-01", "2027-05-13", "2027-06-09", "2027-07-01", "2027-09-16", "2027-10-01", "2027-10-08", "2027-12-25", "2027-12-27"]);

function iso(d) {
  return d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");
}
function isHol(d) {
  return d.getDay() === 0 || d.getDay() === 6 || PUBLIC_HOLIDAYS.has(iso(d));
}
function mins(x) { return parseInt(x.slice(0, 2)) * 60 + parseInt(x.slice(3)); }

const now = new Date();
const nowTotal = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
const hol = isHol(now);

function ttFor(dir, d) {
  const h = isHol(d);
  if (dir === "ra") return h ? RA_HOLIDAY : RA_WEEKDAY;
  return h ? NTP_HOLIDAY : NTP_WEEKDAY;
}

const w = new ListWidget();
w.backgroundColor = new Color("#0f1720");
w.url = "https://tomleeleetom.github.io/shuttle-bus/";
w.setPadding(14, 14, 14, 14);

const top = w.addStack();
top.layoutHorizontally();
const title = top.addText("NR815 駿景園 Shuttle");
title.font = Font.boldSystemFont(12);
title.textColor = new Color("#eaf2f8");
top.addSpacer();
const badge = top.addText(hol ? "假期" : "平日");
badge.font = Font.boldSystemFont(11);
badge.textColor = new Color("#ffd166");

w.addSpacer(8);

const depEnds = [];
const cols = w.addStack();
cols.layoutHorizontally();
cols.topAlignContent();

// 每張卡闊度：跟螢幕闊度計，但 clamp 落安全範圍
// （闊度超出 widget 會令 Scriptable 將成個 layout 向左推、裁咗邊位）
let sw = Device.screenSize().width;
if (sw > 600) {
  const scale = typeof Device.screenScale === "function" ? Device.screenScale() : 1;
  sw = Math.round(sw / scale);
}
const colW = Math.max(115, Math.min(Math.floor((sw - 78) / 2), 150));

// 喺直向 stack 入面置中一行字：左右夾彈性空間
function ctext(col, str, font, color) {
  const row = col.addStack();
  row.layoutHorizontally();
  row.addSpacer();
  const x = row.addText(str);
  x.font = font;
  x.textColor = color;
  row.addSpacer();
}

function buildCol(col, label, dir, accent) {
  // 每邊一張「卡片」：深色底 + 圓角 + 固定半邊闊度
  col.layoutVertically();
  col.size = new Size(colW, 0);
  col.backgroundColor = new Color("#1b2836");
  col.cornerRadius = 12;
  col.setPadding(9, 11, 9, 11);

  const tt = ttFor(dir, now);
  const i = tt.findIndex(x => mins(x) * 60 + 60 > nowTotal);

  ctext(col, label, Font.boldSystemFont(10), accent);
  col.addSpacer(4);

  if (i === -1) {
    const tmr = new Date(now);
    tmr.setDate(tmr.getDate() + 1);
    const ttt = ttFor(dir, tmr);
    ctext(col, "已開出晒", Font.boldSystemFont(14), new Color("#ff8a80"));
    ctext(col, "聽日 " + ttt[0], Font.systemFont(11), new Color("#8ba3b5"));
    return;
  }

  const next = tt[i];
  const diffSec = mins(next) * 60 - nowTotal;
  const diffMin = Math.max(0, Math.ceil(diffSec / 60));
  depEnds.push(mins(next) + 1);

  ctext(col, next, Font.boldSystemFont(30), accent);
  ctext(col,
    diffSec <= 0 ? "開緊" : "in " + diffMin + " min",
    Font.boldSystemFont(13),
    diffMin <= 2 ? new Color("#ff8a80") : new Color("#5ee0a0"));
  col.addSpacer(2);
  const after = tt.slice(i + 1, i + 3).join(" · ");
  ctext(col, after || "尾班車", Font.systemFont(9), new Color("#8ba3b5"));
}

// 三段彈性空間平均分：左邊 | 卡片 | 中間 | 卡片 | 右邊 一樣闊
cols.addSpacer();
const c1 = cols.addStack();
buildCol(c1, "駿景園 → 新城市", "ra", new Color("#ffffff"));
cols.addSpacer();
const c2 = cols.addStack();
buildCol(c2, "新城市 → 駿景園", "ntp", new Color("#d2a679"));
cols.addSpacer();

// 建議 iOS 刷新時間：5 分鐘後，或最近嗰班車開出後（取其早）
let refresh = new Date(now.getTime() + 5 * 60 * 1000);
if (depEnds.length > 0) {
  const m = Math.min.apply(null, depEnds);
  const dep = new Date(now);
  dep.setHours(Math.floor(m / 60), m % 60, 5, 0);
  if (dep < refresh) refresh = dep;
}
w.refreshAfterDate = refresh;

if (config.runsInApp) await w.presentMedium();
Script.setWidget(w);
Script.complete();
