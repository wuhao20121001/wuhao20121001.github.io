// 智能驾驶品牌数据
const drivingBrands = {
    'tesla': {
        name: '特斯拉',
        solution: 'Autopilot/FSD',
        origin: '美国',
        level: 'L2-L3',
        sensors: '摄像头为主，辅助雷达',
        features: '自动变道、自动泊车、智能召唤、FSD Beta城市街道自动驾驶',
        price: 'FSD约6.4万元人民币',
        advantage: '算法成熟，数据积累丰富，城市街道自动驾驶能力强',
        disadvantage: '依赖摄像头，恶劣天气表现受影响，价格较高'
    },
    'nio': {
        name: '蔚来',
        solution: 'NOP+ (Navigate on Pilot Plus)',
        origin: '中国',
        level: 'L2+',
        sensors: '激光雷达+摄像头+雷达+超声波',
        features: '高速/城市NOP、自动变道、自动泊车、遥控泊车',
        price: 'NOP+订阅约380元/月',
        advantage: '激光雷达加持，感知能力强，换电模式支持',
        disadvantage: '城市NOP覆盖范围有限，高速表现仍需优化'
    },
    'xpeng': {
        name: '小鹏',
        solution: 'XPILOT 4.0',
        origin: '中国',
        level: 'L2+',
        sensors: '双激光雷达+摄像头+雷达+超声波',
        features: '城市NGP、高速NGP、自动变道、自动泊车、记忆泊车',
        price: 'XPILOT 4.0硬件免费，软件订阅约500元/月',
        advantage: '城市NGP表现优异，自动泊车能力强，性价比高',
        disadvantage: '高速NGP在复杂路况下仍需人工干预'
    },
    'lixiang': {
        name: '理想',
        solution: 'NOA (Navigation on Autopilot)',
        origin: '中国',
        level: 'L2+',
        sensors: '激光雷达+摄像头+雷达+超声波',
        features: '高速NOA、城市NOA、自动变道、自动泊车',
        price: 'NOA功能约3.98万元',
        advantage: '交互设计友好，辅助驾驶体验流畅，增程式续航无焦虑',
        disadvantage: '城市NOA覆盖城市较少，高速NOA变道策略保守'
    },
    'huawei': {
        name: '华为',
        solution: 'ADS 2.0 (Advanced Driving System)',
        origin: '中国',
        level: 'L2+',
        sensors: '激光雷达+摄像头+雷达+超声波',
        features: '高速NCA、城市NCA、自动变道、自动泊车、代客泊车',
        price: 'ADS 2.0软件包约3.6万元',
        advantage: '全栈自研，感知融合能力强，复杂场景处理能力优异',
        disadvantage: '仅搭载部分车型，生态覆盖有限'
    },
    'byd': {
        name: '比亚迪',
        solution: '天神之眼',
        origin: '中国',
        level: 'L2-L3',
        sensors: '摄像头+雷达+激光雷达(高端车型)',
        features: '高速辅助驾驶、城市辅助驾驶、自动变道、自动泊车、智能召唤',
        price: '天神之眼C免费标配，天神之眼A/B可选装',
        advantage: '覆盖全价格区间，硬件免费，普及度高',
        disadvantage: '高阶功能有待验证，算法成熟度仍需提升'
    },
    'greatwall': {
        name: '长城',
        solution: '咖啡智驾 (Coffee Pilot)',
        origin: '中国',
        level: 'L2-L3',
        sensors: '激光雷达+摄像头+雷达+超声波',
        features: '高速辅助驾驶、城市辅助驾驶、自动变道、自动泊车、记忆泊车',
        price: 'CoffeePilot Ultra选装约3万元',
        advantage: '全车冗余设计，安全性高，场景覆盖广',
        disadvantage: '品牌认知度有待提升，高端车型价格较高'
    },
    'geely': {
        name: '吉利',
        solution: '千里浩瀚',
        origin: '中国',
        level: 'L2+',
        sensors: '激光雷达+摄像头+雷达+超声波',
        features: '高速辅助驾驶、城市辅助驾驶、自动变道、自动泊车、遥控泊车',
        price: '部分车型标配，高端版本约2万元',
        advantage: '与沃尔沃技术共享，硬件配置高，性价比优',
        disadvantage: '城市辅助驾驶能力仍需优化，数据积累不足'
    },
    'ford': {
        name: '福特',
        solution: 'BlueCruise',
        origin: '美国',
        level: 'L2+',
        sensors: '摄像头+雷达+超声波',
        features: '高速辅助驾驶、自动变道、自动泊车',
        price: '选装包约2万元',
        advantage: '高速公路自动驾驶体验流畅，安全性高',
        disadvantage: '缺少激光雷达，城市辅助驾驶能力有限'
    },
    'gm': {
        name: '通用',
        solution: 'Super Cruise',
        origin: '美国',
        level: 'L2+',
        sensors: '摄像头+雷达+高精度地图',
        features: '高速辅助驾驶、自动变道、自动泊车',
        price: '选装包约3万元',
        advantage: '高精度地图加持，驾驶体验稳定，安全性高',
        disadvantage: '覆盖路段有限，升级费用较高'
    },
    'volvo': {
        name: '沃尔沃',
        solution: 'Pilot Assist',
        origin: '瑞典',
        level: 'L2',
        sensors: '摄像头+雷达+超声波',
        features: '自适应巡航、车道保持、自动紧急制动、碰撞预警',
        price: '部分车型标配',
        advantage: '安全性能优异，系统成熟可靠，豪华品牌背书',
        disadvantage: '辅助驾驶功能相对保守，缺少高阶自动驾驶能力'
    },
    'hyundai': {
        name: '现代',
        solution: 'Highway Driving Assist',
        origin: '韩国',
        level: 'L2',
        sensors: '摄像头+雷达+超声波',
        features: '自适应巡航、车道保持、自动变道、自动泊车',
        price: '部分车型标配',
        advantage: '性价比高，系统稳定可靠，燃油车混动车型均有搭载',
        disadvantage: '高级自动驾驶功能有限，缺少激光雷达支持'
    },
    'mercedes': {
        name: '奔驰',
        solution: 'DRIVE PILOT',
        origin: '德国',
        level: 'L3',
        sensors: '摄像头+雷达+激光雷达+高精度地图',
        features: '高速L3自动驾驶、自动变道、自动泊车',
        price: 'DRIVE PILOT选装约10万元',
        advantage: '全球首个量产L3级自动驾驶，安全性高，豪华品牌背书',
        disadvantage: '使用场景受限，仅支持特定高速路段，价格昂贵'
    },
    'bmw': {
        name: '宝马',
        solution: 'Driving Assistant Professional',
        origin: '德国',
        level: 'L2+',
        sensors: '摄像头+雷达+超声波',
        features: '高速辅助驾驶、自动变道、自动泊车、遥控泊车',
        price: '选装包约2.5万元',
        advantage: '驾驶体验流畅，与车辆操控性结合好，品牌溢价',
        disadvantage: '缺少激光雷达，感知能力相对较弱，城市辅助驾驶能力有限'
    },
    'audi': {
        name: '奥迪',
        solution: 'Audi AI: Pilot',
        origin: '德国',
        level: 'L2+',
        sensors: '摄像头+雷达+激光雷达(部分车型)',
        features: '高速辅助驾驶、自动变道、自动泊车、记忆泊车',
        price: '选装包约3万元',
        advantage: '与座舱系统融合好，高速表现稳定，豪华品牌体验',
        disadvantage: '激光雷达仅高端车型搭载，城市辅助驾驶能力有待提升'
    },
    'toyota': {
        name: '丰田',
        solution: 'Toyota Safety Sense 3.0',
        origin: '日本',
        level: 'L2',
        sensors: '摄像头+雷达',
        features: '自适应巡航、车道保持、自动紧急制动、车道偏离预警',
        price: '部分车型标配',
        advantage: '可靠性高，燃油经济性好，普及度高',
        disadvantage: '辅助驾驶功能相对基础，缺少高级自动驾驶能力'
    },
    'honda': {
        name: '本田',
        solution: 'Honda Sensing 360',
        origin: '日本',
        level: 'L2',
        sensors: '摄像头+雷达',
        features: '自适应巡航、车道保持、自动变道、自动泊车',
        price: '部分车型标配',
        advantage: '系统成熟可靠，性价比高，燃油车混动车型均有搭载',
        disadvantage: '高级自动驾驶功能有限，缺少激光雷达支持'
    }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化对比页面
    if (window.location.pathname.includes('compare.html')) {
        initComparePage();
    }
    
    // 初始化品牌列表页面
    if (window.location.pathname.includes('brands.html')) {
        initBrandsPage();
    }
});

// 初始化对比页面
function initComparePage() {
    const selectors = document.querySelectorAll('.brand-selector');
    const compareBtn = document.getElementById('compareBtn');
    const compareTable = document.getElementById('compareTable');
    
    // 填充品牌选择器
    selectors.forEach(selector => {
        fillBrandSelector(selector);
    });
    
    // 对比按钮点击事件
    if (compareBtn) {
        compareBtn.addEventListener('click', function() {
            compareBrands();
        });
    }
    
    // 自动对比（当所有选择器都有值时）
    selectors.forEach(selector => {
        selector.addEventListener('change', function() {
            compareBrands();
        });
    });
}

// 填充品牌选择器
function fillBrandSelector(selector) {
    // 清空现有选项
    selector.innerHTML = '<option value="">选择品牌</option>';
    
    // 添加品牌选项
    for (const [key, brand] of Object.entries(drivingBrands)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${brand.name} - ${brand.solution}`;
        selector.appendChild(option);
    }
}

// 对比品牌
function compareBrands() {
    const selectors = document.querySelectorAll('.brand-selector');
    const selectedBrands = [];
    
    // 获取选中的品牌
    selectors.forEach(selector => {
        if (selector.value) {
            selectedBrands.push(drivingBrands[selector.value]);
        }
    });
    
    // 更新对比表格
    updateCompareTable(selectedBrands);
}

// 更新对比表格
function updateCompareTable(brands) {
    const compareTable = document.getElementById('compareTable');
    if (!compareTable) return;
    
    // 清空现有表格内容
    compareTable.innerHTML = '';
    
    // 创建表头
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // 添加属性列
    const propertyHeader = document.createElement('th');
    propertyHeader.textContent = '对比项';
    headerRow.appendChild(propertyHeader);
    
    // 添加品牌列
    brands.forEach(brand => {
        const brandHeader = document.createElement('th');
        brandHeader.textContent = brand.name;
        headerRow.appendChild(brandHeader);
    });
    
    thead.appendChild(headerRow);
    compareTable.appendChild(thead);
    
    // 创建表格内容
    const tbody = document.createElement('tbody');
    
    // 对比属性列表
    const properties = [
        { key: 'solution', label: '智能驾驶方案' },
        { key: 'origin', label: '品牌 origin' },
        { key: 'level', label: '自动驾驶等级' },
        { key: 'sensors', label: '传感器配置' },
        { key: 'features', label: '主要功能' },
        { key: 'price', label: '价格' },
        { key: 'advantage', label: '优势' },
        { key: 'disadvantage', label: '劣势' }
    ];
    
    // 添加属性行
    properties.forEach(property => {
        const row = document.createElement('tr');
        
        // 属性名称
        const propertyCell = document.createElement('td');
        propertyCell.textContent = property.label;
        propertyCell.style.fontWeight = '600';
        row.appendChild(propertyCell);
        
        // 各品牌属性值
        brands.forEach(brand => {
            const valueCell = document.createElement('td');
            valueCell.textContent = brand[property.key];
            row.appendChild(valueCell);
        });
        
        tbody.appendChild(row);
    });
    
    compareTable.appendChild(tbody);
}

// 初始化品牌列表页面
function initBrandsPage() {
    const brandsList = document.getElementById('brandsList');
    if (!brandsList) return;
    
    // 清空现有内容
    brandsList.innerHTML = '';
    
    // 添加品牌列表
    for (const [key, brand] of Object.entries(drivingBrands)) {
        const brandItem = document.createElement('div');
        brandItem.className = 'brand-item';
        
        brandItem.innerHTML = `
            <h3>${brand.name}</h3>
            <p><strong>方案名称:</strong> ${brand.solution}</p>
            <p><strong>品牌 origin:</strong> ${brand.origin}</p>
            <p><strong>自动驾驶等级:</strong> ${brand.level}</p>
            <p><strong>主要功能:</strong> ${brand.features.substring(0, 100)}...</p>
            <a href="#" class="btn btn-primary" onclick="showBrandDetail('${key}')">查看详情</a>
        `;
        
        brandsList.appendChild(brandItem);
    }
}

// 显示品牌详情
function showBrandDetail(brandKey) {
    const brand = drivingBrands[brandKey];
    if (!brand) return;
    
    // 创建详情弹窗
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
    `;
    
    modalContent.innerHTML = `
        <h2>${brand.name} - ${brand.solution}</h2>
        <div style="margin-top: 1rem;">
            <p><strong>品牌 origin:</strong> ${brand.origin}</p>
            <p><strong>自动驾驶等级:</strong> ${brand.level}</p>
            <p><strong>传感器配置:</strong> ${brand.sensors}</p>
            <p><strong>主要功能:</strong> ${brand.features}</p>
            <p><strong>价格:</strong> ${brand.price}</p>
            <p><strong>优势:</strong> ${brand.advantage}</p>
            <p><strong>劣势:</strong> ${brand.disadvantage}</p>
        </div>
        <button id="closeModal" class="btn btn-primary" style="margin-top: 1rem;">关闭</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // 关闭弹窗
    const closeBtn = document.getElementById('closeModal');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // 点击弹窗外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}
