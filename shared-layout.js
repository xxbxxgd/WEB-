document.addEventListener("DOMContentLoaded", () => {
    const currentPage = decodeURIComponent(window.location.pathname.split("/").pop() || "index.html");

    const isProductPage = [
        "產品系列.html",
        "雙玄關門系列.html",
        "雙玄關門A系列.html",
        "雙玄關門D系列.html"
    ].includes(currentPage);

    const isAccessoryPage = [
        "門花鎖系列.html",
        "門鎖系列.html",
        "門色總覽.html"
    ].includes(currentPage);

    const navTemplate = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <i class="fas fa-door-open me-2 text-warning"></i>
                <span>國堡門 <small class="text-muted fs-6">Guobao Door DESIGN</small></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link ${currentPage === "index.html" ? "active" : ""}" href="index.html">首頁</a></li>
                    <li class="nav-item"><a class="nav-link ${currentPage === "品牌介紹.html" ? "active" : ""}" href="品牌介紹.html">品牌介紹</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${isProductPage ? "active" : ""}" href="產品系列.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">產品系列</a>
                        <ul class="dropdown-menu product-series-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item ${currentPage === "雙玄關門A系列.html" ? "active" : ""}" href="雙玄關門A系列.html">雙玄關門 A 系列</a></li>
                            <li><a class="dropdown-item ${currentPage === "雙玄關門D系列.html" ? "active" : ""}" href="雙玄關門D系列.html">雙玄關門 D 系列</a></li>
                            <li><a class="dropdown-item ${currentPage === "雙玄關門系列.html" ? "active" : ""}" href="雙玄關門系列.html">雙玄關門系列</a></li>
                            <li><a class="dropdown-item" href="雙玄關門雙視窗系列.html">雙玄關門雙視窗系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#waterproof-series">防水防污門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#steel-series">鋼製壓板門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#louver-series">百頁通風門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#japanese-series">日式玄關門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#stone-series">石材玄關門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#carving-series">烤漆精雕門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#louvre-series">羅浮宮浮雕門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#door-in-door-series">門中門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#tech-wood-series">科技實木門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#natural-wood-series">天然實木門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#carbon-series">碳纖防爆門系列</a></li>
                            <li><a class="dropdown-item" href="產品系列.html#smdoor-series">雙茂門</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${isAccessoryPage ? "active" : ""}" href="門花鎖系列.html" id="navbarDropdownDoorLock" role="button" data-bs-toggle="dropdown" aria-expanded="false">門花/鎖系列</a>
                        <ul class="dropdown-menu dropdown-menu-end product-series-menu accessory-series-menu" aria-labelledby="navbarDropdownDoorLock">
                            <li><a class="dropdown-item ${currentPage === "門花鎖系列.html" ? "active" : ""}" href="門花鎖系列.html">門花系列</a></li>
                            <li><a class="dropdown-item ${currentPage === "門鎖系列.html" ? "active" : ""}" href="門鎖系列.html">門鎖系列</a></li>
                            <li><a class="dropdown-item ${currentPage === "門色總覽.html" ? "active" : ""}" href="門色總覽.html">門色總覽</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link ${currentPage === "展品出清.html" ? "active" : ""}" href="展品出清.html">展品出清</a></li>
                    <li class="nav-item"><a class="nav-link ${currentPage === "聯絡我們.html" ? "active" : ""}" href="聯絡我們.html">門市資訊</a></li>
                    <li class="nav-item"><a class="btn btn-primary-custom ms-2" href="聯絡我們.html">聯絡我們</a></li>
                </ul>
            </div>
        </div>
    </nav>`;

    const footerTemplate = `
    <footer id="contact" class="bg-dark text-white py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">國堡門 Guobao Door DESIGN</h5>
                    <p class="text-white-50 mb-3">專注於住宅大門、門花、門鎖與門色搭配提案，結合美感、安全與實用性，打造更完整的入門體驗。</p>
                    <div class="social-icons mt-3">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="me-3 text-white"><i class="fab fa-facebook fa-lg"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="me-3 text-white"><i class="fab fa-instagram fa-lg"></i></a>
                        <a href="https://line.me/" target="_blank" rel="noopener noreferrer" aria-label="LINE" class="text-white"><i class="fab fa-line fa-lg"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">快速連結</h5>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="index.html" class="text-white-50 text-decoration-none">首頁</a></li>
                        <li class="mb-2"><a href="品牌介紹.html" class="text-white-50 text-decoration-none">品牌介紹</a></li>
                        <li class="mb-2"><a href="門花鎖系列.html" class="text-white-50 text-decoration-none">門花／門鎖系列</a></li>
                        <li class="mb-2"><a href="展品出清.html" class="text-white-50 text-decoration-none">展品出清</a></li>
                        <li class="mb-2"><a href="聯絡我們.html" class="text-white-50 text-decoration-none">門市資訊</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-12">
                    <h5 class="text-white mb-3">聯絡資訊</h5>
                    <ul class="list-unstyled small text-white-50 mb-0">
                        <li class="mb-2"><i class="fas fa-envelope me-2"></i><a href="mailto:service@hung-chan.com.tw" class="text-white-50 text-decoration-none">service@hung-chan.com.tw</a></li>
                        <li class="mb-2"><i class="fas fa-phone me-2"></i><a href="tel:0800368369" class="text-white-50 text-decoration-none">0800-368-369</a></li>
                        <li class="mb-2"><i class="fas fa-clock me-2"></i>週一至週六 09:30 - 20:00</li>
                        <li class="mb-2"><i class="fas fa-location-dot me-2"></i>歡迎來店洽詢客製門款與安裝方案</li>
                    </ul>
                </div>
            </div>
            <hr class="border-secondary my-4">
            <div class="text-center small text-white-50">
                &copy; 2026 國堡門 Guobao Door Design. All Rights Reserved.
            </div>
        </div>
    </footer>`;

    const existingNav = document.querySelector("nav.navbar");
    if (existingNav) {
        existingNav.outerHTML = navTemplate;
    } else {
        document.body.insertAdjacentHTML("afterbegin", navTemplate);
    }

    const existingFooter = document.querySelector("footer#contact");
    if (existingFooter) {
        existingFooter.outerHTML = footerTemplate;
    } else {
        document.body.insertAdjacentHTML("beforeend", footerTemplate);
    }
});
