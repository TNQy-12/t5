function changeLanguage(language) {
    const translations = {
        en: {
            "connect_1": "Connect",
            "website": "Website",
            "language": "Language",
            "login": "Login",
            "product-code-placeholder": "Enter product code",
            "home": "Home",
            "product_0": "Products",
            "product_1": "Product Catalog",
            "product_2": "Technical Specifications",
            "product_3": "Application Guides",
            "solution_0": "Solution",
            "solution_1": "Automatic machine",
            "history_1": "Our History",
            "history_2": "Leadership",
            "history_3": "Mission",
            "rnd_1": "Automation LAB",
            "rnd_2": "Cooperate",
            "rnd_3": "Career opportunities",
            "strong_0": "Sustainability",
            "strong_1": "Sustainability Goals",
            "strong_2": "Eco-friendly Practices",
            "strong_3": "Reports",
            "support_0": "Support/FAQ",
            "support_1": "FAQ",
            "support_2": "Contact Support",
            "support_3": "Resources",
            "center_main": "R&D AUTOMATION MACHINERY DEPARTMENT",
            "lab_1": "Automation Pneumatic Systems",
            "lab_2": "Apply High-Technology",
            "lab_3": "Industrial automation applications",
            "laB_1": "Pneumatic Lab",
            "laB_2": "High-Tech Solutions",
            "laB_3": "Smart Automation",
            "machine_0": "PRODUCTS",
            "machine_1": "AUTOMATIC CARTON SEALING MACHINE",
            "machine_2": "Folding Cartons, gluing and cutting glue automatically",
            "machine_3": "ROBOT X, Y, Z 2-POSITIONS",
            "machine_4": "Lifting and lowering 3 axes and 2 positions",
            "machine_5": "PART O-RING 10MM",
            "machine_6": "PART ROUND AXLE SHAFT WITH 10MM DIAMETER",
            "machine_7": "Y-AXIS CNC MILLING JIG",
            "machine_8": "Axis movement left and right",
            "machine_9": "PRINTER 3D",
            "machine_10": "3D Rrinting of plastic, PLA, ABS",
            "machine_11": "AUTOMATIC PRODUCT CLASSIFICATION MACHINE",
            "machine_12": "Sort products by height and color",
            "partner_0": "PARTNERS AND CUSTOMERS",
            "info_0": "ABOUT HYPERTECH",
            "info_1": "HYPERTECH Co,. LTD",
            "info_2": " is a company in the automation field, providing automated machine solutions, and developing remote monitoring and control systems such as SCADA and DCS (Comprehensive solutions - Future-oriented)",
            "info_3": "Our products and services:",
            "info_4": "Providing automation equipment - User guidance and R&D",
            "info_5": "Design consultancy, execution, and installation services.",
            "info_6": "Optimization and enhancement of automation processes for manufacturing machines.",
            "info_7": "R&D of SCADA/DCS systems and IoT solutions.",
            "info_8": "Servo Motion Control systems.",
            "info_9": "Design of 3D printers, milling machines, and small to medium-sized laser cutting machines.",
            "info_10": "Custom machining of parts based on samples and improvements according to requirements.",
            "more_0": "More >",

        },
        vi: {
            "connect_1": "Kết nối",
            "website": "Trang web",
            "language": "Ngôn ngữ",
            "login": "Đăng nhập",
            "product-code-placeholder": "Nhập mã sản phẩm",
            "home": "Trang chủ",
            "product_0": "Sản phẩm",
            "product_1": "Danh mục sản phẩm",
            "product_2": "Thông số kỹ thuật",
            "product_3": "Hướng dẫn sử dụng",
            "solution_0": "Giải Pháp",
            "solution_1": "Máy tự động",
            "history_1": "Lịch sử phát triển",
            "history_2": "Tầm nhìn",
            "history_3": "Sứ mệnh",
            "rnd_1": "Phòng nghiên cứu tự động hóa",
            "rnd_2": "Hợp tác",
            "rnd_3": "Cơ hội nghề nghiệp",
            "strong_0": "Năng lực",
            "strong_1": "Quy mô công ty",
            "strong_2": "Chất lượng dự án",
            "strong_3": "Báo cáo",
            "support_0": "Hỗ trợ/FAQ",
            "support_1": "FAQ",
            "support_2": "Phần mềm",
            "support_3": "Thiết bị- Kỹ Thuật",
            "center_main": "NGHIÊN CỨU VÀ CHẾ TẠO THIẾT BỊ TỰ ĐỘNG HÓA",
            "lab_1": "Phòng thí nghiệm tự động hóa khí nén SMC",
            "lab_2": "Ứng dụng công nghệ cao",
            "lab_3": "Tự động hóa công nghệp ứng dụng",
            "laB_1": "Phòng nghiên cứu khí nén tự động",
            "laB_2": "Giải pháp công nghệ cao",
            "laB_3": "Tự động hóa thông minh",
            "machine_0": "SẢN PHẨM",
            "machine_1": "MÁY DÁN THÙNG CARTON TỰ ĐỘNG",
            "machine_2": "Gấp thùng, dán niêm phong và cắt băng keo tự động",
            "machine_3": "ROBOT X, Y, Z NÂNG 2 CHIỀU",
            "machine_4": "Nâng hạ 3 trục và 2 vị trí",
            "machine_5": "PART GÁ TRỤC 10MM",
            "machine_6": "PART gá trục trơn tròn với đường kính 10MM",
            "machine_7": "GÁ CNC PHAY TRỤC Y",
            "machine_8": "Trục chuyển động trái, phải",
            "machine_9": "MÁY IN 3D",
            "machine_10": "In 3d nhựa, PLA, ABS",
            "machine_11": "MÁY PHÂN LOẠI SẢN PHẨM TỰ ĐỘNG",
            "machine_12": "Phân loại sản phẩm theo chiều cao và màu sắc",
            "partner_0": "ĐỐI TÁC VÀ KHÁCH HÀNG",
            "info_0": "GIỚI THIỆU VỀ HYPERTECH",
            "info_1": "Công Ty TNHH Giải pháp tự động hóa HyperTECH",
            "info_2": " là đơn vị trong lĩnh vực tự động hóa, cung cấp giải pháp máy tự động, nghiên cứu phát triển hệ thống điều khiển và giám sát từ xa SCADA - DCS ( Giải pháp toàn diện - hướng đến tương lai).",
            "info_3": "Sản phẩm và dịch vụ của chúng tôi:",
            "info_4": "Cung cấp thiết bị tự động hóa - Hướng dẫn sử dụng thiết bị và nghiên cứu chuyên sâu",
            "info_5": "Dịch vụ tư vấn thiết kế, thi công và lắp đặt.",
            "info_6": "Cải tiến quy trình tự động hóa cho máy sản xuất.",
            "info_7": "Nghiên cứu và phát triển hệ thống SCADA/DCS và IoT.",
            "info_8": "Điều khiển chuyển động Servo - Motion Control.",
            "info_9": "Thiết kế máy in 3D, máy phay, máy cắt Laser vừa và nhỏ.",
            "info_10": "Gia công chi tiết theo mẫu và cải tiến theo yêu cầu khách hàng.",
            "more_0": "Đọc thêm >",



        },
        ja: {
            "connect_1": "接続",
            "website": "ウェブサイト",
            "language": "言語",
            "login": "ログイン",
            "product-code-placeholder": "製品コードを入力",
            "home": "Home",
            "product_0": "製品",
            "product_1": "製品カテゴリー",
            "product_2": "スペック",
            "product_3": "使用説明書",
            "solution_0": "ソリューション",
            "solution_1": "自動機械",
            "history_1": "発展の歴史 ",
            "history_2": "ビジョン",
            "history_3": "ミッション",
            "rnd_1": "自動化研究室",
            "rnd_2": "協力する",
            "rnd_3": "職業機会 ",
            "strong_0": "能力",
            "strong_1": "会社の規模",
            "strong_2": " プロジェクトの品質",
            "strong_3": "報告書",
            "support_0": "サポート/イベント/FAQ",
            "support_1": "FAQ",
            "support_2": "ソフトウェア",
            "support_3": "設備 - 技術",
            "center_main": "研究開発自動機械部",
            "lab_1": "SMCの圧縮空気自動化ラボ",
            "lab_2": "高度な技術の応用",
            "lab_3": "産業自動化の応用",
            "laB_1": "圧縮空気ラボ",
            "laB_2": "ハイテクソリューション",
            "laB_3": "スマート自動化 ",
            "machine_0": "製品",
            "machine_1": "自動段ボール封印機",
            "machine_2": "段ボールの折り畳み、接着および接着剤の自動切断",
            "machine_3": "ROBOT X, Y, Z 2軸昇降",
            "machine_4": "3軸および2位置の昇降",
            "machine_5": "パーツ シャフトジャック 10MM",
            "machine_6": "直径10MMのラウンドアクスルシャフト",
            "machine_7": "Y軸CNCフライス治具",
            "machine_8": "充実のバリエーション",
            "machine_9": "3Dプリンター",
            "machine_10": "3D プリント、PLA、ABS プラスチックを提供",
            "machine_11": "商品自動仕分け機",
            "machine_12": "商品を色別に自動仕分け",
            "partner_0": "パートナーと顧客",
            "info_0": "HYPERTECH ー テクノロジーの紹介",
            "info_1": "HYPERTECH Co,. LTD",
            "info_2": " はオートメーション分野のユニットで、自動機械ソリューションの提供、遠隔制御および監視システム SCADA - DCS (将来を志向した包括的ソリューション) の研究開発を行っています",
            "info_3": " 当社の製品とサービス:",
            "info_4": " 自動化機器の提供 - 機器の使用説明書と詳細な調査",
            "info_5": " 設計、施工、設置に関するコンサルティングサービス。",
            "info_6": " 生産機械の自動化プロセスを改善します。",
            "info_7": " SCADA/DCSおよびIoTシステムの研究開発。",
            "info_8": " モーション コントロール サーボ - モーション コントロール。",
            "info_9": " 中小型3Dプリンター、フライス盤、レーザー切断機の設計。",
            "info_10": " サンプルに従って詳細を処理し、顧客の要求に応じて改善します。",
            "more_0": "続きを読む >",

        }
    };

    // Lặp qua các phần tử có id và thay đổi nội dung hoặc placeholder
    Object.keys(translations[language]).forEach(function(id) {
        const element = document.getElementById(id);
        if (element) {
            // Nếu là input và có placeholder, thay đổi placeholder
            if (element.tagName === "INPUT" && element.placeholder) {
                element.placeholder = translations[language][id];
            } else {
                // Thay đổi nội dung cho các phần tử khác
                element.textContent = translations[language][id];
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    // Function to show products for selected page
    function showPage(page) {
        // Get all product items
        const products = document.querySelectorAll('.product-item');
        
        // Hide all products
        products.forEach(product => {
            product.style.display = 'none';
        });
        
        // Show products for the selected page
        const pageProducts = document.querySelectorAll('.page-' + page);
        pageProducts.forEach(product => {
            product.style.display = 'block';
        });
    }

    // Default: Show page 1
    showPage(1);

    // Add event listeners for pagination buttons
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            
            if (page === 'next') {
                // Logic for next page (optional, if required for next-page navigation)
                const currentPage = document.querySelector('.page-item.active');
                const nextPage = currentPage.nextElementSibling;
                
                if (nextPage) {
                    const pageNumber = nextPage.querySelector('.page-link').getAttribute('data-page');
                    showPage(pageNumber);
                    currentPage.classList.remove('active');
                    nextPage.classList.add('active');
                }
            } else if (page === 'last') {
                // Logic for last page
                const lastPage = 6; // Assuming you have 6 pages in total
                showPage(lastPage);
                // Update active class
                const activePage = document.querySelector('.page-item.active');
                if (activePage) {
                    activePage.classList.remove('active');
                }
                const lastPageItem = document.querySelector(`.page-link[data-page="${lastPage}"]`).parentElement;
                lastPageItem.classList.add('active');
            } else {
                // Show the selected page
                showPage(page);

                // Update active class on pagination links
                const activePage = document.querySelector('.page-item.active');
                if (activePage) {
                    activePage.classList.remove('active');
                }
                this.parentElement.classList.add('active');
            }
        });
    });
});



