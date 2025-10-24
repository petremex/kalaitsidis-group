// CMS Content Loader
// This script loads content from _data folder (managed by Decap CMS)

// Helper to parse markdown frontmatter
function parseFrontmatter(text) {
    const match = text.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return {};
    
    const data = {};
    const lines = match[1].split('\n');
    
    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            
            // Remove quotes
            value = value.replace(/^["']|["']$/g, '');
            data[key] = value;
        }
    });
    
    return data;
}

// Fetch and parse markdown file
async function fetchContent(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) return null;
        const text = await response.text();
        return parseFrontmatter(text);
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
        return null;
    }
}

// Fetch all files in a directory by trying known filenames
async function fetchDirectory(basePath, filenames) {
    const results = [];
    for (const filename of filenames) {
        const data = await fetchContent(`${basePath}/${filename}`);
        if (data) results.push(data);
    }
    return results;
}

// Load and update Hero section
async function loadHero() {
    const hero = await fetchContent('_data/hero/hero.md');
    if (hero) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const h1 = heroContent.querySelector('h1');
            const p = heroContent.querySelector('p');
            const button = heroContent.querySelector('.cta-button');
            
            if (h1 && hero.title) h1.textContent = hero.title;
            if (p && hero.subtitle) p.textContent = hero.subtitle;
            if (button && hero.button_text) button.textContent = hero.button_text;
        }
    }
}

// Load and update Services section
async function loadServices() {
    const services = await fetchDirectory('_data/services', [
        'stegastra.md',
        'perifrakseis.md',
        'grafeia.md',
        'apothikes.md',
        'eidikes-kataskeues.md'
    ]);
    
    if (services.length > 0) {
        // Sort by order
        services.sort((a, b) => (parseInt(a.order) || 0) - (parseInt(b.order) || 0));
        
        const servicesGrid = document.querySelector('.services-grid');
        if (servicesGrid) {
            servicesGrid.innerHTML = '';
            services.forEach(service => {
                const card = document.createElement('div');
                card.className = 'service-card';
                card.innerHTML = `
                    <i class="fas ${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                `;
                servicesGrid.appendChild(card);
            });
        }
    }
}

// Load and update Projects slideshow
async function loadProjects() {
    const projects = await fetchDirectory('_data/projects', [
        'lion.md',
        'apothiki-skeletos.md',
        'perifraxis-vilas.md',
        'pergola-exoxikou.md'
    ]);
    
    if (projects.length > 0) {
        // Sort by order
        projects.sort((a, b) => (parseInt(a.order) || 0) - (parseInt(b.order) || 0));
        
        const slideshowContainer = document.getElementById('slideshowContainer');
        const dotsContainer = document.getElementById('dotsContainer');
        
        if (slideshowContainer && dotsContainer) {
            // Clear existing
            const existingSlides = slideshowContainer.querySelectorAll('.slide');
            existingSlides.forEach(slide => slide.remove());
            dotsContainer.innerHTML = '';
            
            // Create slides
            projects.forEach((project, index) => {
                const slide = document.createElement('div');
                slide.className = index === 0 ? 'slide active' : 'slide';
                slide.innerHTML = `
                    <img src="${project.image}" alt="${project.title}">
                    <div class="slide-content">
                        <h3>${project.title}</h3>
                        ${project.description ? `<p>${project.description}</p>` : ''}
                    </div>
                `;
                
                const prevButton = slideshowContainer.querySelector('.prev');
                slideshowContainer.insertBefore(slide, prevButton);
                
                // Create dot
                const dot = document.createElement('span');
                dot.className = index === 0 ? 'dot active' : 'dot';
                dot.onclick = () => currentSlide(index + 1);
                dotsContainer.appendChild(dot);
            });
            
            // Reinitialize slideshow
            if (typeof initSlideshow === 'function') {
                slides = document.querySelectorAll('.slide');
                dots = document.querySelectorAll('.dot');
            }
        }
    }
}

// Load and update Fleet section
async function loadFleet() {
    const fleet = await fetchDirectory('_data/fleet', [
        'geranos.md',
        'skaptiko.md',
        'ntalika.md'
    ]);
    
    if (fleet.length > 0) {
        fleet.sort((a, b) => (parseInt(a.order) || 0) - (parseInt(b.order) || 0));
        
        const fleetGrid = document.querySelector('.fleet-grid');
        if (fleetGrid) {
            fleetGrid.innerHTML = '';
            fleet.forEach(item => {
                const fleetItem = document.createElement('div');
                fleetItem.className = 'fleet-item';
                fleetItem.innerHTML = `
                    <i class="fas ${item.icon}"></i>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                fleetGrid.appendChild(fleetItem);
            });
        }
    }
}

// Load and update About section
async function loadAbout() {
    const about = await fetchContent('_data/about/about.md');
    if (about) {
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.innerHTML = `
                <p>${about.paragraph1 ? about.paragraph1.replace('Kalaitsidis Group', '<strong>Kalaitsidis Group</strong>') : ''}</p>
                <p>${about.paragraph2 ? about.paragraph2.replace(/ποιότητα|αξιοπιστία|γρήγορη εξυπηρέτηση/gi, match => `<strong>${match}</strong>`) : ''}</p>
                <p>${about.paragraph3 || ''}</p>
            `;
        }
    }
}

// Load and update Contact section
async function loadContact() {
    const contact = await fetchContent('_data/contact/contact.md');
    if (contact) {
        const contactGrid = document.querySelector('.contact-grid');
        if (contactGrid && contact.address) {
            const firstInfo = contactGrid.querySelector('.contact-info');
            if (firstInfo) {
                firstInfo.innerHTML = `
                    <h3>Στοιχεία Επικοινωνίας</h3>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${contact.address.replace(/\\n/g, '<br>')}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${contact.phone1}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-mobile-alt"></i>
                        <span>${contact.phone2}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${contact.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <span>${contact.hours.replace(/\\n/g, '<br>')}</span>
                    </div>
                `;
            }
            
            // Update social media
            const socialMedia = document.querySelector('.social-media');
            if (socialMedia) {
                socialMedia.innerHTML = `
                    <a href="${contact.facebook}" target="_blank" class="social-link" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="${contact.instagram}" target="_blank" class="social-link" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="${contact.tiktok}" target="_blank" class="social-link" aria-label="TikTok">
                        <i class="fab fa-tiktok"></i>
                    </a>
                `;
            }
        }
    }
}

// Load all CMS content
async function loadAllCMSContent() {
    await Promise.all([
        loadHero(),
        loadServices(),
        loadProjects(),
        loadFleet(),
        loadAbout(),
        loadContact()
    ]);
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllCMSContent);
} else {
    loadAllCMSContent();
}
