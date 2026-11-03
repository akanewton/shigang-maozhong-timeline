window.WARLORD_PHASES = [
  {from:1916, to:1924, caption:'北洋军阀混战', factions:[
    {name:'皖系', color:'#8b7bff', prov:['安徽省','浙江省','福建省','山东省']},
    {name:'直系', color:'#2fa8a0', prov:['河北省','河南省','湖北省','江西省','江苏省']},
    {name:'奉系', color:'#ff8a5b', prov:['辽宁省','吉林省','黑龙江省']},
    {name:'晋系', color:'#d38bff', prov:['山西省']},
    {name:'滇系', color:'#4fd18b', prov:['云南省','贵州省']},
    {name:'桂系', color:'#ffd166', prov:['广西壮族自治区','广东省']},
    {name:'川军', color:'#ff6b9d', prov:['四川省','重庆市']},
    {name:'其他', color:'#7f8fa6', prov:['北京市','天津市','内蒙古自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区','西藏自治区','湖南省','海南省','台湾省','上海市','香港特别行政区']}
  ]},
  {from:1924, to:1926, caption:'军阀割据与国民军', factions:[
    {name:'奉系', color:'#ff8a5b', prov:['辽宁省','吉林省','黑龙江省','河北省','山东省']},
    {name:'直系', color:'#2fa8a0', prov:['河南省','湖北省']},
    {name:'孙传芳五省联军', color:'#ffb347', prov:['江苏省','浙江省','安徽省','江西省','福建省']},
    {name:'国民军', color:'#5c9be8', prov:['北京市','天津市','内蒙古自治区','陕西省','甘肃省','宁夏回族自治区','青海省']},
    {name:'晋系', color:'#d38bff', prov:['山西省']},
    {name:'滇系', color:'#4fd18b', prov:['云南省','贵州省']},
    {name:'桂系', color:'#ffd166', prov:['广西壮族自治区','广东省']},
    {name:'川军', color:'#ff6b9d', prov:['四川省','重庆市']},
    {name:'其他', color:'#7f8fa6', prov:['新疆维吾尔自治区','西藏自治区','湖南省','海南省','台湾省','上海市','香港特别行政区']}
  ]},
  {from:1926, to:1928, caption:'北伐战争', factions:[
    {name:'北伐军', color:'#3f7fdc', prov:['广东省','广西壮族自治区','湖南省','湖北省','江西省','福建省','浙江省','安徽省','江苏省']},
    {name:'奉系', color:'#ff8a5b', prov:['辽宁省','吉林省','黑龙江省','河北省','山东省']},
    {name:'直系', color:'#2fa8a0', prov:['河南省']},
    {name:'晋系', color:'#d38bff', prov:['山西省']},
    {name:'国民军', color:'#5c9be8', prov:['北京市','天津市','内蒙古自治区','陕西省','甘肃省','宁夏回族自治区','青海省']},
    {name:'滇系', color:'#4fd18b', prov:['云南省','贵州省']},
    {name:'川军', color:'#ff6b9d', prov:['四川省','重庆市']},
    {name:'其他', color:'#7f8fa6', prov:['新疆维吾尔自治区','西藏自治区','海南省','台湾省','上海市','香港特别行政区']}
  ]}
];

/* 小型高亮区域（真实行政边界缺失时的补充；香港优先用省界数据） */
window.HIGHLIGHT_POLYS = {
  ili: [[80.4,44.6],[84.6,44.6],[84.6,42.7],[80.3,42.7]],
  ludai: [[120.9,39.9],[121.7,39.9],[122.1,39.4],[122.1,38.7],[121.2,38.7],[120.9,39.1]],
  hongkong: [[113.8,22.6],[114.5,22.6],[114.5,22.15],[113.8,22.15]],
  macau: [[113.48,22.25],[113.65,22.25],[113.65,22.08],[113.48,22.08]]
};


/* ===================== HOI4 风格势力图 =====================
   数据模型：时期 + 势力 + 省份列表（省界真实几何，势力按省界合并）
   type='provinces' 是当前唯一模式；后续可扩展 geojson 图层
*/
window.FACTION_PHASES = [
  {from:1916, to:1924, label:'北洋军阀混战', factions:window.WARLORD_PHASES[0].factions},
  {from:1924, to:1926, label:'军阀割据与国民军', factions:window.WARLORD_PHASES[1].factions},
  {from:1926, to:1928, label:'北伐战争', factions:window.WARLORD_PHASES[2].factions},
  {from:1928, to:1931, label:'南京国民政府形式统一', factions:[
    {name:'国民政府', color:'#4f8fd9', prov:['江苏省','浙江省','安徽省','湖北省','湖南省','河南省','山东省','河北省','北京市','天津市','上海市','广东省']},
    {name:'东北军', color:'#ff8a5b', prov:['辽宁省','吉林省','黑龙江省']},
    {name:'中共苏区', color:'#e23b3b', prov:['江西省','福建省']},
    {name:'晋系', color:'#d38bff', prov:['山西省']},
    {name:'桂系', color:'#ffd166', prov:['广西壮族自治区']},
    {name:'川军', color:'#ff6b9d', prov:['四川省','重庆市']},
    {name:'滇系', color:'#4fd18b', prov:['云南省','贵州省']},
    {name:'西北军', color:'#5c9be8', prov:['陕西省','甘肃省','宁夏回族自治区','青海省']},
    {name:'新疆', color:'#b0b0b0', prov:['新疆维吾尔自治区']},
    {name:'其他', color:'#7f8fa6', prov:['内蒙古自治区','西藏自治区','台湾省','海南省','香港特别行政区']}
  ]},
  {from:1931, to:1937, label:'国民政府 · 苏区 · 伪满', factions:[
    {name:'国民政府', color:'#4f8fd9', prov:['江苏省','浙江省','安徽省','湖北省','湖南省','河南省','山东省','河北省','北京市','天津市','上海市','广东省']},
    {name:'中共苏区', color:'#e23b3b', prov:['江西省','福建省']},
    {name:'伪满 / 日占', color:'#a85a32', prov:['辽宁省','吉林省','黑龙江省']},
    {name:'晋系', color:'#d38bff', prov:['山西省']},
    {name:'桂系', color:'#ffd166', prov:['广西壮族自治区']},
    {name:'川军', color:'#ff6b9d', prov:['四川省','重庆市']},
    {name:'滇系', color:'#4fd18b', prov:['云南省','贵州省']},
    {name:'西北军', color:'#5c9be8', prov:['陕西省','甘肃省','宁夏回族自治区','青海省']},
    {name:'新疆', color:'#b0b0b0', prov:['新疆维吾尔自治区']},
    {name:'其他', color:'#7f8fa6', prov:['内蒙古自治区','西藏自治区','台湾省','海南省','香港特别行政区']}
  ]},
  {from:1937, to:1945, label:'抗日战争 · 三方格局', factions:[
    {name:'国统区', color:'#4f8fd9', prov:['四川省','重庆市','云南省','贵州省','广西壮族自治区','湖南省','江西省','福建省','浙江省','广东省','新疆维吾尔自治区','青海省','甘肃省']}, {name:'西藏地方', color:'#8b8f98', alpha:.8, prov:['西藏自治区']},
    {name:'中共根据地', color:'#e23b3b', prov:['陕西省','宁夏回族自治区','山西省','河北省','山东省','河南省','安徽省','江苏省','湖北省','内蒙古自治区']},
    {name:'日占区 / 伪政权', color:'#a85a32', prov:['辽宁省','吉林省','黑龙江省','北京市','天津市','上海市','台湾省','海南省','宁夏回族自治区']},
    {name:'其他', color:'#7f8fa6', prov:['香港特别行政区']}
  ]},
  {from:1945, to:1946, label:'抗战胜利 · 国共格局', factions:[
    {name:'国统区', color:'#4f8fd9', prov:['四川省','重庆市','云南省','贵州省','广西壮族自治区','湖南省','江西省','福建省','浙江省','广东省','新疆维吾尔自治区','青海省','甘肃省','湖北省','河南省','安徽省','江苏省','山东省','河北省','山西省','陕西省','北京市','天津市','上海市','台湾省','海南省','宁夏回族自治区']}, {name:'西藏地方', color:'#8b8f98', alpha:.8, prov:['西藏自治区']},
    {name:'解放区', color:'#e23b3b', prov:['辽宁省','吉林省','黑龙江省','内蒙古自治区']},
    {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
  ]},
  {from:1946, to:1947, label:'解放战争 · 战略防御', factions:[
    {name:'国统区', color:'#4f8fd9', prov:['江苏省','浙江省','安徽省','江西省','福建省','湖北省','湖南省','广东省','广西壮族自治区','四川省','重庆市','云南省','贵州省','新疆维吾尔自治区','青海省','甘肃省','陕西省','宁夏回族自治区','山西省','河南省','山东省','河北省','北京市','天津市','上海市','海南省','台湾省']}, {name:'西藏地方', color:'#8b8f98', alpha:.8, prov:['西藏自治区']},
    {name:'解放区', color:'#e23b3b', prov:['辽宁省','吉林省','黑龙江省','内蒙古自治区']},
    {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
  ]},
  {from:1947, to:1948, label:'解放战争 · 战略反攻', factions:[
    {name:'解放区', color:'#e23b3b', prov:['辽宁省','吉林省','黑龙江省','内蒙古自治区','河北省','山西省','山东省','河南省','安徽省']},
    {name:'国统区', color:'#4f8fd9', prov:['江苏省','浙江省','江西省','福建省','湖北省','湖南省','广东省','广西壮族自治区','四川省','重庆市','云南省','贵州省','新疆维吾尔自治区','青海省','甘肃省','陕西省','宁夏回族自治区','北京市','天津市','上海市','海南省','台湾省']}, {name:'西藏地方', color:'#8b8f98', alpha:.8, prov:['西藏自治区']},
    {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
  ]},
  {from:1948, to:1949, label:'解放战争 · 战略决战', factions:[
    {name:'解放区', color:'#e23b3b', prov:['辽宁省','吉林省','黑龙江省','内蒙古自治区','河北省','山西省','山东省','河南省','安徽省','江苏省','浙江省','陕西省','甘肃省','宁夏回族自治区','湖北省','湖南省','江西省','福建省','北京市','天津市','上海市']},
    {name:'国统区', color:'#4f8fd9', prov:['广东省','广西壮族自治区','四川省','重庆市','云南省','贵州省','新疆维吾尔自治区','青海省','海南省','台湾省']}, {name:'西藏地方', color:'#8b8f98', alpha:.8, prov:['西藏自治区']},
    {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
  ]},
  {from:1949, to:1951, label:'新中国成立 · 大陆基本解放', factions:[
    {name:'解放区', color:'#e23b3b', prov:['北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆市','四川省','贵州省','云南省','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区']},
    {name:'国统区', color:'#4f8fd9', prov:['台湾省']}, {name:'西藏地方', color:'#8b8f98', alpha:.8, prov:['西藏自治区']},
    {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
  ]}
];
window.FACTION_PHASES.forEach(p => {
  const seen = {};
  p.factions.forEach(f => {
    f.prov = f.prov.filter(n => { if (seen[n]) return false; seen[n] = 1; return true; });
  });
});


/* ===================== 势力图：1840–1916 晚清—民国初 ===================== */
(function(){
  const ALL = (window.CHINA_MAP || []).map(f => f.n);
  const without = (arr) => ALL.filter(n => !arr.includes(n));
  const early = [
    {from:1840, to:1842, label:'清朝 · 鸦片战争前', factions:[
      {name:'清朝', color:'#a98455', alpha:.62, prov:ALL.slice()}
    ]},
    {from:1842, to:1851, label:'清朝 · 《南京条约》后', factions:[
      {name:'清朝', color:'#a98455', alpha:.62, prov:without(['香港特别行政区'])},
      {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
    ]},
    {from:1851, to:1864, label:'清朝 · 太平天国', factions:[
      {name:'清朝', color:'#a98455', alpha:.62, prov:without(['江苏省','浙江省','安徽省','江西省','湖北省','湖南省','香港特别行政区'])},
      {name:'太平天国', color:'#c46bff', alpha:.7, prov:['江苏省','浙江省','安徽省','江西省','湖北省','湖南省']},
      {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
    ]},
    {from:1864, to:1895, label:'清朝 · 洋务运动时期', factions:[
      {name:'清朝', color:'#a98455', alpha:.62, prov:without(['香港特别行政区'])},
      {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
    ]},
    {from:1895, to:1912, label:'清朝 · 列强瓜分势力范围（示意）', factions:[
      {name:'清朝', color:'#a98455', alpha:.58, prov:without(['辽宁省','吉林省','黑龙江省','新疆维吾尔自治区','山东省','西藏自治区','广东省','香港特别行政区','云南省','广西壮族自治区','海南省','福建省','台湾省'])},
      {name:'俄国势力范围', color:'#6b8fbf', alpha:.62, prov:['辽宁省','吉林省','黑龙江省','新疆维吾尔自治区']},
      {name:'德国势力范围', color:'#c98a3a', alpha:.62, prov:['山东省']},
      {name:'英国势力范围', color:'#7d6bff', alpha:.62, prov:['西藏自治区','广东省','香港特别行政区']},
      {name:'法国势力范围', color:'#5fa88f', alpha:.62, prov:['云南省','广西壮族自治区','海南省']},
      {name:'日本势力范围', color:'#b07ad6', alpha:.62, prov:['福建省','台湾省']}
    ]},
    {from:1912, to:1916, label:'中华民国 · 北洋政府', factions:[
      {name:'中华民国', color:'#4f8fd9', alpha:.62, prov:without(['台湾省','香港特别行政区'])},
      {name:'日占台湾', color:'#a85a32', alpha:.72, prov:['台湾省']},
      {name:'英属香港', color:'#7d6bff', alpha:.75, prov:['香港特别行政区']}
    ]}
  ];
  const HKN = '香港特别行政区';
  const MACAU = '澳门特别行政区';
  const newChina = [
    {from:1951, to:1997, label:'中华人民共和国', factions:[
      {name:'中华人民共和国', color:'#e0453e', alpha:.86, prov:ALL.filter(n => n !== HKN)},
      {name:'英属香港', color:'#7d6bff', alpha:.75, prov:[HKN]}
    ]},
    {from:1997, to:1999, label:'中华人民共和国 · 香港回归', factions:[
      {name:'中华人民共和国', color:'#e0453e', alpha:.86, prov:ALL.filter(n => n !== MACAU)},
      {name:'葡属澳门', color:'#8b8f98', alpha:.8, prov:[MACAU]}
    ]},
    {from:1999, to:2022, label:'中华人民共和国 · 澳门回归', factions:[
      {name:'中华人民共和国', color:'#e0453e', alpha:.86, prov:ALL.slice()}
    ]}
  ];
  window.FACTION_PHASES = early.concat(window.FACTION_PHASES || [], newChina);

  // 澳门：1887—1999 年单列，避免被并入中国政权
  window.FACTION_PHASES.forEach(p => {
    if (p.from >= 1887 && p.to <= 1999){
      p.factions.forEach(f => { if (f.name !== '葡属澳门') f.prov = (f.prov || []).filter(n => n !== MACAU); });
      const mac = p.factions.find(f => f.name === '葡属澳门');
      if (mac) mac.prov = [MACAU]; else p.factions.push({name:'葡属澳门', color:'#8b8f98', alpha:.8, prov:[MACAU]});
    }
  });
})();


/* ===================== 关键历史节点 + 行军路线 ===================== */
window.KEY_SITES = [
  {name:'上海 · 一大会址', lon:121.47, lat:31.23, from:1921, to:1927},
  {name:'嘉兴 · 南湖红船', lon:120.75, lat:30.75, from:1921, to:1927},
  {name:'广州 · 农讲所', lon:113.27, lat:23.13, from:1924, to:1927},
  {name:'武汉 · 八七会议', lon:114.30, lat:30.60, from:1927, to:1928},
  {name:'南昌 · 八一起义', lon:115.89, lat:28.68, from:1927, to:1927.99},
  {name:'井冈山', lon:114.17, lat:26.57, from:1927, to:1934},
  {name:'古田会议', lon:116.80, lat:25.20, from:1929, to:1930},
  {name:'瑞金', lon:116.03, lat:25.89, from:1931, to:1934},
  {name:'遵义会议', lon:106.93, lat:27.70, from:1935, to:1935.6},
  {name:'延安', lon:109.49, lat:36.59, from:1935, to:1948},
  {name:'西柏坡', lon:114.00, lat:38.30, from:1948, to:1949},
  {name:'北京', lon:116.40, lat:39.90, from:1949, to:2022}
];

window.EXTRA_ROUTES = [
  {name:'北伐路线 1926–1928', from:1926, to:1928, color:'#ffd166',
   points:[[113.26,23.13],[113.6,24.8],[112.98,28.2],[114.30,30.60],[115.89,28.68],[118.78,32.06],[121.47,31.23]]},
  {name:'秋收起义 · 上井冈山', from:1927, to:1928, color:'#ff8f6b',
   points:[[112.98,28.2],[113.8,28.0],[114.0,27.2],[114.17,26.57]]},
  {name:'辽沈战役', from:1948.7, to:1948.9, color:'#e23b3b',
   points:[[121.13,41.10],[123.43,41.80]]},
  {name:'淮海战役', from:1948.85, to:1949.1, color:'#e23b3b',
   points:[[117.28,34.26],[117.6,33.7],[116.8,33.8]]},
  {name:'平津战役', from:1948.9, to:1949.1, color:'#e23b3b',
   points:[[116.40,39.90],[117.20,39.10]]},
  {name:'渡江战役 1949', from:1949.3, to:1949.5, color:'#e23b3b',
   points:[[118.78,32.06],[120.0,31.9],[121.47,31.23]]}
];


/* 三大战役关键地点 + 路线全称 */
window.KEY_SITES.push(
  {name:'锦州', lon:121.13, lat:41.10, from:1948.5, to:1949.2},
  {name:'沈阳', lon:123.43, lat:41.80, from:1948.5, to:1949.2},
  {name:'徐州', lon:117.28, lat:34.26, from:1948.5, to:1949.2},
  {name:'陈官庄', lon:116.60, lat:33.85, from:1948.9, to:1949.2},
  {name:'北平', lon:116.40, lat:39.90, from:1948.9, to:1949.2},
  {name:'天津', lon:117.20, lat:39.10, from:1948.9, to:1949.2}
);
window.EXTRA_ROUTES.forEach(r => {
  if (r.name && r.name.indexOf('辽沈') === 0) r.name = '辽沈战役（锦州—沈阳）';
  if (r.name && r.name.indexOf('淮海') === 0) r.name = '淮海战役（徐州—陈官庄）';
  if (r.name && r.name.indexOf('平津') === 0) r.name = '平津战役（北平—天津）';
});

window.KEY_SITES.push(
  {name:'三大战役', lon:117.28, lat:34.26, from:1948.5, to:1949.3, detail:'辽沈（锦州—沈阳） · 淮海（徐州—陈官庄） · 平津（北平—天津）'},
  {name:'太平天国', lon:118.78, lat:32.06, from:1851, to:1864, detail:'1851—1864 · 天京（南京）与清廷对峙'}
);


/* ===== v7.18：台湾/香港阶段补丁 ===== */
(function(){
  const TWN='台湾省', HKN='香港特别行政区';
  const phases=window.FACTION_PHASES;
  const strip=(p,names)=>{ p.factions.forEach(f=>{ if(!names.includes(f.name)) f.prov=(f.prov||[]).filter(n=>n!==TWN&&n!==HKN); }); };
  phases.forEach(p=>{
    if (p.from >= 1916 && p.to <= 1937){
      strip(p,['日占台湾','英属香港']);
      if (!p.factions.some(f=>f.name==='日占台湾')) p.factions.push({name:'日占台湾', color:'#a85a32', alpha:.72, prov:[TWN]});
      if (!p.factions.some(f=>f.name==='英属香港')) p.factions.push({name:'英属香港', color:'#7d6bff', alpha:.75, prov:[HKN]});
    }
  });
  const idx=phases.findIndex(p=>p.from===1937 && p.to===1945);
  if (idx>=0){
    const p=phases[idx];
    p.to=1941; p.label='抗日战争 · 三方格局（1937—1941）';
    strip(p,['日占台湾','英属香港','日占香港']);
    if (!p.factions.some(f=>f.name==='日占台湾')) p.factions.push({name:'日占台湾', color:'#a85a32', alpha:.72, prov:[TWN]});
    if (!p.factions.some(f=>f.name==='英属香港')) p.factions.push({name:'英属香港', color:'#7d6bff', alpha:.75, prov:[HKN]});
    const p2=JSON.parse(JSON.stringify(p));
    p2.from=1941; p2.to=1945; p2.label='抗日战争 · 日占香港（1941—1945）';
    p2.factions=p2.factions.filter(f=>f.name!=='英属香港');
    if (!p2.factions.some(f=>f.name==='日占香港')) p2.factions.push({name:'日占香港', color:'#a85a32', alpha:.78, prov:[HKN]});
    phases.splice(idx+1,0,p2);
  }
  phases.forEach(p=>{ const mac=p.factions.find(f=>f.name==='葡属澳门'); if(mac) mac.prov=['澳门特别行政区']; });
})();
