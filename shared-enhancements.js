document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        line: "https://line.me/"
    };

    document.querySelectorAll("img").forEach((img, index) => {
        if (!img.hasAttribute("loading")) {
            img.loading = index < 2 ? "eager" : "lazy";
        }
        if (!img.hasAttribute("decoding")) {
            img.decoding = "async";
        }
    });

    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
        rel.add("noopener");
        rel.add("noreferrer");
        link.setAttribute("rel", Array.from(rel).join(" "));
    });

    document.querySelectorAll("a").forEach((link) => {
        const href = (link.getAttribute("href") || "").trim();
        const icon = link.querySelector("i");

        if (icon?.classList.contains("fa-facebook") && href === "#") {
            link.href = socialLinks.facebook;
            link.target = "_blank";
            link.setAttribute("aria-label", "Facebook");
        }

        if (icon?.classList.contains("fa-instagram") && href === "#") {
            link.href = socialLinks.instagram;
            link.target = "_blank";
            link.setAttribute("aria-label", "Instagram");
        }

        if (icon?.classList.contains("fa-line") && href === "#") {
            link.href = socialLinks.line;
            link.target = "_blank";
            link.setAttribute("aria-label", "LINE");
        }

        if (link.textContent.includes("Google 地圖") && href === "#") {
            link.href = "聯絡我們.html";
            link.removeAttribute("target");
            link.setAttribute("aria-label", "查看門市資訊與地圖");
        }
    });

    document.querySelectorAll("li").forEach((item) => {
        const text = item.textContent.trim();

        if (text.includes("service@hung-chan.com.tw") && !item.querySelector('a[href^="mailto:"]')) {
            item.insertAdjacentHTML(
                "beforeend",
                ' <a href="mailto:service@hung-chan.com.tw" class="text-white-50 text-decoration-none">service@hung-chan.com.tw</a>'
            );
            item.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("service@hung-chan.com.tw")) {
                    node.textContent = node.textContent.replace("service@hung-chan.com.tw", "");
                }
            });
        }

        if (text.includes("0800-368-369") && !item.querySelector('a[href^="tel:"]')) {
            item.insertAdjacentHTML(
                "beforeend",
                ' <a href="tel:0800368369" class="text-white-50 text-decoration-none">0800-368-369</a>'
            );
            item.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("0800-368-369")) {
                    node.textContent = node.textContent.replace("0800-368-369", "");
                }
            });
        }
    });
});
