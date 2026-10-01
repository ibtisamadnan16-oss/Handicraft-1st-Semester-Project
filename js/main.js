/**
 * VENUS HANDICRAFTS - MAIN JAVASCRIPT
 * Handles active navigation state, mobile menu closing, and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Nav Link based on URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-navbar .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const linkFile = href.split('/').pop().split('#')[0];
            if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
            }
        }
    });

    // 2. Auto-close mobile navbar on link click
    const navbarCollapse = document.getElementById('mainNavbarNav');
    if (navbarCollapse) {
        const navItems = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // 2b. Enable Products parent nav-link to navigate to products.html on click
    const productDropdownLinks = document.querySelectorAll('.main-navbar .nav-item.dropdown > a.dropdown-toggle');
    productDropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === 'javascript:void(0)') return;

            if (window.innerWidth >= 992) {
                // Desktop: clicking "Products" goes directly to products.html
                window.location.href = href;
            } else {
                // Mobile: If dropdown is already open, navigate to products.html
                const parent = this.closest('.dropdown');
                if (parent && parent.classList.contains('show')) {
                    window.location.href = href;
                }
            }
        });
    });

    // 3. Search Bar Interaction
    const searchForm = document.getElementById('siteSearchForm');
    const searchInput = document.getElementById('siteSearchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query.length > 0) {
                // If on products page, could trigger search, otherwise redirect to products with query
                window.location.href = `products.html?q=${encodeURIComponent(query)}`;
            } else {
                searchInput.focus();
            }
        });
    }

    // 4. Cart / Wishlist click feedback
    const wishlistBtn = document.querySelector('.action-wishlist');
    const cartBtn = document.querySelector('.action-cart');

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Your Wishlist contains items saved for later.');
        });
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Your shopping bag is currently empty.');
        });
    }

    // 5. Category Filter Buttons on Products Page
    const filterButtons = document.querySelectorAll('.cat-filter-btn');
    const showcaseCards = document.querySelectorAll('.category-card-item');

    if (filterButtons.length > 0 && showcaseCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                showcaseCards.forEach(card => {
                    const cardCat = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCat === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Check URL for category or query filter
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('category');
        const searchParam = urlParams.get('q');

        if (catParam) {
            const targetBtn = document.querySelector(`.cat-filter-btn[data-filter="${catParam}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
        } else if (searchParam) {
            const query = searchParam.toLowerCase();
            showcaseCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    // 6. Professional Product Detail Modal Handler
    const productModalElement = document.getElementById('productDetailModal');
    if (productModalElement) {
        const modalInstance = new bootstrap.Modal(productModalElement);

        document.querySelectorAll('.btn-open-detail').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const name = button.getAttribute('data-name') || 'Handicraft Item';
                const category = button.getAttribute('data-category') || 'Handicrafts';
                const material = button.getAttribute('data-material') || 'Traditional Artisan Material';
                const desc = button.getAttribute('data-desc') || 'Authentic handmade artifact crafted by skilled master artisans.';
                const designs = button.getAttribute('data-designs') || 'Traditional, Heritage Antique, Contemporary Floral';
                const usage = button.getAttribute('data-usage') || 'Home Decoration, Interior Accent, Luxury Gifting';
                const img = button.getAttribute('data-img') || 'images/logo.jpg';

                document.getElementById('modalProductTitle').textContent = name;
                document.getElementById('modalProductImg').src = img;
                document.getElementById('modalProductImg').alt = name;
                document.getElementById('modalProductCategory').textContent = category;
                document.getElementById('modalProductMaterial').textContent = material;
                document.getElementById('modalProductDesigns').textContent = designs;
                document.getElementById('modalProductUsage').textContent = usage;
                document.getElementById('modalProductDesc').textContent = desc;

                modalInstance.show();
            });
        });
    }

    // 7. Gallery Interactive Filter & Lightbox Preview Handler (Phase 6)
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-filter-item');

    if (galleryFilterBtns.length > 0 && galleryCards.length > 0) {
        galleryFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                galleryFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryCards.forEach(card => {
                    const cardCat = card.getAttribute('data-category');
                    if (filter === 'all' || cardCat === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Lightbox Modal Controls
    const lightboxModalElement = document.getElementById('galleryLightboxModal');
    if (lightboxModalElement) {
        const lightboxModal = new bootstrap.Modal(lightboxModalElement);
        let currentGalleryIndex = 0;
        let visibleGalleryCards = [];

        function updateVisibleCards() {
            visibleGalleryCards = Array.from(document.querySelectorAll('.gallery-filter-item')).filter(card => card.style.display !== 'none');
        }

        function displayLightboxItem(index) {
            updateVisibleCards();
            if (visibleGalleryCards.length === 0) return;

            if (index < 0) index = visibleGalleryCards.length - 1;
            if (index >= visibleGalleryCards.length) index = 0;

            currentGalleryIndex = index;
            const targetCard = visibleGalleryCards[currentGalleryIndex];

            const imgEl = targetCard.querySelector('.gallery-img-container img');
            const titleEl = targetCard.querySelector('.gallery-card-footer-title') || targetCard.querySelector('.gallery-hover-title');
            const badgeEl = targetCard.querySelector('.gallery-tag-badge');

            const imgSrc = imgEl ? imgEl.src : '';
            const title = titleEl ? titleEl.textContent : 'Handicraft Preview';
            const category = badgeEl ? badgeEl.textContent : 'Handicraft';

            const modalImg = document.getElementById('lightboxImg');
            const modalTitle = document.getElementById('lightboxTitle');
            const modalBadge = document.getElementById('lightboxCategory');
            const modalCounter = document.getElementById('lightboxCounter');

            if (modalImg) {
                modalImg.src = imgSrc;
                modalImg.alt = title;
            }
            if (modalTitle) modalTitle.textContent = title;
            if (modalBadge) modalBadge.textContent = category;
            if (modalCounter) modalCounter.textContent = `${currentGalleryIndex + 1} of ${visibleGalleryCards.length}`;
        }

        // Attach click to cards
        document.querySelectorAll('.gallery-grid-card').forEach(card => {
            card.addEventListener('click', () => {
                updateVisibleCards();
                const parentItem = card.closest('.gallery-filter-item');
                const idx = visibleGalleryCards.indexOf(parentItem);
                displayLightboxItem(idx >= 0 ? idx : 0);
                lightboxModal.show();
            });
        });

        const prevBtn = document.getElementById('lightboxPrevBtn');
        const nextBtn = document.getElementById('lightboxNextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                displayLightboxItem(currentGalleryIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                displayLightboxItem(currentGalleryIndex + 1);
            });
        }

        // Keyboard arrows support
        document.addEventListener('keydown', (e) => {
            if (lightboxModalElement.classList.contains('show')) {
                if (e.key === 'ArrowLeft') {
                    displayLightboxItem(currentGalleryIndex - 1);
                } else if (e.key === 'ArrowRight') {
                    displayLightboxItem(currentGalleryIndex + 1);
                }
            }
        });
    }

    // 8. Contact Form Client-Side Validation & Submission (Phase 12)
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactSuccessAlert');

    if (contactForm) {
        // Clear error on input
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('is-invalid-custom');
                const existingMsg = field.parentElement.querySelector('.validation-error-msg');
                if (existingMsg) existingMsg.remove();
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const nameField = document.getElementById('contactName') || document.getElementById('name');
            const emailField = document.getElementById('contactEmail') || document.getElementById('email');
            const phoneField = document.getElementById('contactPhone') || document.getElementById('phone');
            const subjectField = document.getElementById('contactSubject') || document.getElementById('subject');
            const messageField = document.getElementById('contactMessage') || document.getElementById('message');

            function showError(field, message) {
                if (!field) return;
                isValid = false;
                field.classList.add('is-invalid-custom');
                let errEl = field.parentElement.querySelector('.validation-error-msg');
                if (!errEl) {
                    errEl = document.createElement('div');
                    errEl.className = 'validation-error-msg';
                    field.parentElement.appendChild(errEl);
                }
                errEl.textContent = message;
            }

            // Name validation
            if (nameField && nameField.value.trim().length < 2) {
                showError(nameField, 'Please enter a valid full name (minimum 2 characters).');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField && !emailRegex.test(emailField.value.trim())) {
                showError(emailField, 'Please enter a valid email address (e.g. name@example.com).');
            }

            // Phone validation
            if (phoneField && phoneField.value.trim().replace(/\D/g, '').length < 7) {
                showError(phoneField, 'Please enter a valid phone number with area code (minimum 7 digits).');
            }

            // Subject validation
            if (subjectField && subjectField.value.trim().length < 3) {
                showError(subjectField, 'Please enter a subject (minimum 3 characters).');
            }

            // Message validation
            if (messageField && messageField.value.trim().length < 10) {
                showError(messageField, 'Please write a message with at least 10 characters.');
            }

            if (!isValid) {
                const firstInvalid = contactForm.querySelector('.is-invalid-custom');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            // Valid Submission
            const userName = nameField ? nameField.value.trim() : 'Valued Customer';
            if (contactAlert) {
                contactAlert.classList.remove('d-none');
                contactAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert(`Thank you, ${userName}! Your inquiry has been sent to Venus Handicrafts. Our export & support desk will contact you within 24 business hours.`);
            }

            contactForm.reset();
        });
    }

    // 9. Smooth Scrolling for Internal Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#' && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 10. Back-to-Top Floating Button (Phase 12)
    let backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTopBtn';
        backToTopBtn.className = 'back-to-top-btn';
        backToTopBtn.setAttribute('title', 'Back to top');
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        backToTopBtn.innerHTML = '▲';
        document.body.appendChild(backToTopBtn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



