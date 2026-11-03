# 第三方数据与许可

本工具包含以下开放数据/派生数据。

## 1. 现代中国省界

- 文件：`mapdata.js` 中的 `CHINA_MAP`
- 来源：DataV.GeoAtlas（阿里云公开地理数据）
  - https://datav.aliyun.com/portal/school/atlas/area_selector
- 用途：现代中国底图、势力图着色、定位。
- 说明：DataV 的省界数据可作为学习底图，但不等于自然资源部发布的官方标准地图；正式出版/公开使用请以自然资源部标准地图服务为准：
  - http://bzdt.ch.mnr.gov.cn/

## 2. 世界地图

- 文件：`mapdata.js` 中的 `WORLD_MAP`
- 来源：Natural Earth 1:50m 世界地图（公有领域）
  - https://www.naturalearthdata.com/
- 用途：世界背景、定位器。
- 说明：Natural Earth 是国际通用底图，其部分边界画法与中国的官方主张不一致；本工具只把它当世界背景，不用它画中国主图。

## 3. 清代 1911 年省界

- 文件：`qing_provinces.js`
- 来源：CHGIS Version 5 数据的 TopoJSON 处理版本
  - 原始项目：https://github.com/fusiwei339/chgis-1911-topojson
  - CHGIS：https://chgis.fas.harvard.edu/
- 许可：MIT License，Copyright (c) 2016 fusiwei339；许可全文见本文件末尾。
- 处理：字段重命名、坐标简化（RDP）、格式转换。
- 用途：1912 年以前清代疆域内的历史省界示意。

## 4. 清代疆域 / 太平天国阶段

- 文件：`qing_phases.js`
- 来源：早期整理的“江山时序”公开历史地图数据，并做 RDP 简化。
- 用途：清代阶段疆域轮廓、太平天国控制区示意。
- 说明：属于公开历史地图数据的二次整理，不是 CHGIS 原始边界；用于阶段示意。

## 5. 势力范围、路线、关键地点

- 文件：`layers.js`
- 来源：依据通行中国近现代史教材与历史地图手工整理（军阀割据、北伐、长征、三大战役等）。
- 说明：势力范围是教学示意图，不是精确历史边界；颜色仅表示阵营，不代表官方立场。

## 6. 政治与使用说明

- 本工具是考研复习辅助，不是官方地图产品；
- 现代中国边界以 DataV 省级数据为底，正式使用应以自然资源部标准地图为准；
- 1912—1945 年外蒙古按当时中华民国声称疆域显示，1946 年承认独立后不再显示；台湾 1895—1945 年按日占时期隐藏，1945 年光复后恢复；
- 历史时期的疆域、省界、势力范围存在不同画法，学习时以教材、正式历史地图集和 CHGIS 等学术数据为准。

---

MIT License

Copyright (c) 2016 fusiwei339

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 7. 标准地图链接

- 本项目不再嵌入/再分发官方标准地图图片；
- 页面右下角只提供自然资源部标准地图服务链接：
  - https://bzdt.ch.mnr.gov.cn/
- 页面声明：本项目中所有地图仅供学习使用，实际地图请以自然资源部官方地图为准。
- 主交互地图仍是 DataV/CHGIS 历史教学示意底图，不是官方标准地图。
