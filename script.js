        // ==================== CONFIGURATION ====================
        const correctAnniversary = ["march 30", "03/30", "3/30", "march30", "30 march"];
        const confirmations = [
            "You sure?",
            "Very sure?",
            "Yan ba talaga?",
            "Sure na sure na?",
            "Last na to, sigurado ka na?"
        ];
        let confirmationStep = 0;
        let messageClickCount = 0;

        // ==================== POPULATE PHOTOS ====================
        // CHANGE THE NUMBER 23 TO MATCH HOW MANY PHOTOS YOU HAVE
        // Your photos should be in a folder named 'photo' and named: 1.jpg, 2.jpg, 3.jpg, etc.
        function populatePhotos() {
            const photoGallery = document.getElementById('photoGallery');
            const numberOfPhotos = 124; // CHANGE THIS NUMBER
            
            // Color palette for placeholder (for testing)
            const colors = ['FF69B4', 'FFB6C1', 'FFC0CB', 'FF1493', 'DB7093', 'C71585'];
            
            for (let i = 1; i <= numberOfPhotos; i++) {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.onclick = function() {
                    openLightbox(this);
                };
                
                // OPTION 1: Use placeholder images (for testing layout)
                // const color = colors[i % colors.length];
                // photoItem.innerHTML = `<img src='https://via.placeholder.com/400x400/${color}/FFFFFF?text=Photo+${i}' alt='Us ${i}'>`;
                
                // OPTION 2: Use actual photos (uncomment this when you have your photos ready)
                photoItem.innerHTML = `<img src='${i}.jpg' alt='Us ${i}'>`;
                
                photoGallery.appendChild(photoItem);
            }
        }

        // ==================== POPULATE EXTRA MEMES ====================
        function populateMessageMemes() {
            const extraMemes = [
                "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnk3NjRxcDBlMXQ0dmptOWlzb2lzbGd3bjg1cm01bDY4ZGFkY3Z3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif",
                "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHByYW5lOWtlMmN1ZnA5cjJkaXFpazVwODExczUzNWZodWNpeWtqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qFmdpUKAFZ6rMobzzu/giphy.gif",
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZyYzJ3Mjd2b25hZXExMm5senc4OHBwbGZseThjNXk5c3p1cnN0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif",
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnI0emJjemtvZ2o0ZXRwNnBwMnJta2Y4dHdic3o4Mm1qOXV3M3JlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wPnbkEcr2tXiTN0Lmq/giphy.gif"
            ];
            
            const memeGallery = document.getElementById('messageMemeGallery');
            extraMemes.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                memeGallery.appendChild(img);
            });
        }

        // ==================== LOGIN FUNCTIONS ====================
        function checkAnniversary() {
            const input = document.getElementById('anniversaryInput').value.toLowerCase().trim();
            const errorMsg = document.getElementById('errorMessage');
            
            if (correctAnniversary.some(date => input.includes(date))) {
                errorMsg.textContent = '';
                startConfirmations();
            } else {
                errorMsg.textContent = 'Nako! Sino yang anniversary na yan?! 🤨';
            }
        }

        function startConfirmations() {
            confirmationStep = 0;
            document.getElementById('confirmationOverlay').style.display = 'flex';
            document.getElementById('confirmationQuestion').textContent = confirmations[confirmationStep];
        }

        function nextConfirmation() {
            confirmationStep++;
            
            if (confirmationStep < confirmations.length) {
                document.getElementById('confirmationQuestion').textContent = confirmations[confirmationStep];
            } else {
                document.getElementById('confirmationOverlay').style.display = 'none';
                document.getElementById('loginPage').style.display = 'none';
                document.getElementById('mainPage').style.display = 'block';
                
                const music = document.getElementById('bgMusic');
                music.play().catch(() => {
                    console.log("Music autoplay prevented");
                });
                
                triggerConfetti();
            }
        }

        function wrongConfirmation() {
            document.getElementById('confirmationOverlay').style.display = 'none';
            document.getElementById('errorMessage').textContent = 'Di ka sure eh! Try mo ulit! 😤';
        }

        // ==================== LIGHTBOX FUNCTIONS ====================
        function openLightbox(element) {
            const img = element.querySelector('img');
            document.getElementById('lightboxImg').src = img.src;
            document.getElementById('lightbox').style.display = 'flex';
        }

        function closeLightbox() {
            document.getElementById('lightbox').style.display = 'none';
        }

        // ==================== MESSAGE BUTTON FUNCTIONS ====================
        function tryOpenMessage() {
            const today = new Date();
            
            // Check if it's February 14 or later
            if (today.getMonth() === 1 && today.getDate() >= 14) {
                // TRIGGER ALL EXPLOSION EFFECTS!
                triggerScreenShake();
                triggerScreenFlash();
                triggerMassiveConfetti();
                triggerFireworks();
                triggerHeartExplosion();
                
                // Show the message
                setTimeout(() => {
                    document.getElementById('messageContent').style.display = 'block';
                    document.getElementById('messageButton').style.display = 'none';
                }, 300);
            } else {
                // Show NO gifs
                messageClickCount++;
                showNoGifs();
            }
        }

        function showNoGifs() {
            const container = document.getElementById('noGifs');
            const noGifs = [
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ5NmZ5b213eG9ndzQ2Z2RrOGxkYWcxcmVnZGR4eGRwYWFhZ2RqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rik9n81Vda3rzr5F8h/giphy.gif",
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJsNWF0ajhvcGZxdWoxb2syemgwNmZndzJ5NmZqeGduYnp2bHdneiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fXnRObM8Q0RkOmR5nf/giphy.gif",
                "https://media.giphy.com/media/d10dMmzqCYqQ0/giphy.gif",
                "https://media.giphy.com/media/Yycc82XEuWDaLLi2GV/giphy.gif",
                
"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmh6c3dhbDRqM2NxaTl6c2k2a25udjcxYWJtaXI2dGRodnFmZ3ZhMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ch1pcRhEb0c1y/giphy.gif",

"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Y2NGV4dTV3cnlpMTJydzhseTN3OTFidTZyMWU2YThrdGhhNDFrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Bc4oup2pdP5iKFAYiF/giphy.gif"
            ];
            
            const randomGif = noGifs[Math.floor(Math.random() * noGifs.length)];
            const img = document.createElement('img');
            img.src = randomGif;
            container.appendChild(img);
            
            if (container.children.length > 10) {
                container.removeChild(container.firstChild);
            }
        }

        function closeMessage() {
            // TRIGGER EVEN BIGGER EXPLOSION!
            triggerScreenShake();
            triggerScreenFlash();
            triggerMassiveConfetti();
            triggerMassiveConfetti(); // Double confetti!
            triggerFireworks();
            triggerFireworks(); // Double fireworks!
            triggerHeartExplosion();
            triggerHeartExplosion(); // Double hearts!
            
            // Show the love message
            setTimeout(() => {
                document.getElementById('messageContent').style.display = 'none';
                document.getElementById('loveMessage').style.display = 'block';
                
                // Populate sweet GIFs
                populateSweetGifs();
                
                // Start continuous heart rain
                startContinuousHeartRain();
            }, 300);
        }

        // ==================== FLOATING HEARTS EFFECT ====================
        function createFloatingHearts() {
            const heartsContainer = document.getElementById('hearts');
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = '💖';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = Math.random() * 25 + 20 + 'px';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => heart.remove(), 6000);
            }, 300);
        }

        // ==================== CONFETTI EFFECT ====================
        function triggerConfetti() {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }
        }

        function triggerMassiveConfetti() {
            // 3x more confetti!
            for (let i = 0; i < 300; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.top = Math.random() * 50 + 'vh';
                    confetti.style.width = Math.random() * 15 + 5 + 'px';
                    confetti.style.height = Math.random() * 15 + 5 + 'px';
                    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, ${Math.random() * 30 + 50}%)`;
                    confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 4000);
                }, Math.random() * 500);
            }
        }

        // ==================== SCREEN SHAKE EFFECT ====================
        function triggerScreenShake() {
            document.body.classList.add('shake');
            setTimeout(() => {
                document.body.classList.remove('shake');
            }, 500);
        }

        // ==================== SCREEN FLASH EFFECT ====================
        function triggerScreenFlash() {
            const flash = document.getElementById('flashOverlay');
            flash.classList.add('flash');
            setTimeout(() => {
                flash.classList.remove('flash');
            }, 300);
        }

        // ==================== FIREWORKS EFFECT ====================
        function triggerFireworks() {
            const colors = ['#ff6f91', '#ff3f7f', '#FFD700', '#FF69B4', '#FFA500', '#FF1493'];
            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight * 0.5;
                    createFireworkBurst(x, y, colors[Math.floor(Math.random() * colors.length)]);
                }, Math.random() * 1000);
            }
        }

        function createFireworkBurst(x, y, color) {
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.backgroundColor = color;
                
                const angle = (Math.PI * 2 * i) / particleCount;
                const velocity = 100 + Math.random() * 100;
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;
                
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                particle.style.animation = `explode ${0.5 + Math.random() * 0.5}s ease-out forwards`;
                
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 1500);
            }
        }

        // ==================== HEART EXPLOSION EFFECT ====================
        function triggerHeartExplosion() {
            const hearts = ['💖', '💕', '💗', '💓', '💝', '❤️', '💘'];
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart-particle';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = centerX + 'px';
                    heart.style.top = centerY + 'px';
                    
                    const angle = Math.random() * Math.PI * 2;
                    const distance = 200 + Math.random() * 300;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    
                    heart.style.setProperty('--tx', tx + 'px');
                    heart.style.setProperty('--ty', ty + 'px');
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 1500);
                }, Math.random() * 300);
            }
        }

        // ==================== SWEET GIFS GALLERY ====================
        function populateSweetGifs() {
            const sweetGifsContainer = document.getElementById('sweetGifs');
            
            // Array of sweet romantic GIF URLs
            // YOU CAN REPLACE THESE WITH YOUR OWN SWEET GIFS!
            const sweetGifs = [
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3kzcHJlaWZlMjNxbG4wcWQwY2hrM25wZXhjOGM0M3F2MWQzaWN5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IVK6xNBpEAHYyOdghk/giphy.gif", // Cute love
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTQ1dG9qdWpycXdyNjI2YW81aGNmZG1kNHJkeXliOHlzamFsejBpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l7JN5Jckn9EwecE05Q/giphy.gif", // Heart hands
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VuYnF5Y2t3b3Jrd2J0ZHV6andvbHVvcGR0cTVxbmFydG1kdzJxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BhNPh0OYrAIz0iArla/giphy.gif", // Cute couple
                "https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif", // Love hearts
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTBuMWN1NGVxbGVyeWlpdXdxYnpxNjVzb2xsdWNxY2Zrb3IzZmpoYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aIwDgLaYu0cgwRdvGZ/giphy.gif", // Romantic
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZlMGx4MWNmMzJtaTk4MmlnejJxdWxvM3Fpb2lrNGR6dWFqYmM1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3vem6xB4vIgcNtml3G/giphy.gif", // Hearts
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Zwam9sZnE2ajIwZG9hMDc5NmhjYjgyZzAwcXc1aWZsN29pdWJiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GfViqR2CGssawUHYCR/giphy.gif", // Cute love
                "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnplYTRxMXdsNzYyZHR4cWFyc3lhcDhqeTJvM2dyYWJodmdjZHVpcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YBfp1lKQbEraCrxoSE/giphy.gif", // Sweet
                "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE3c3g5ZmIyODc5bHpvMnl4ODNhcTF4Nnp2ajNmcjVlMXlodTk4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wjcy4tlrtBZqk1szWV/giphy.gif", // Love
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDl1NTNkNWVsc3R5MGE5M3l0cHd1M28yb2hxcDR6ZmZ0Z3gzNms5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9QZHsgnGf0TYheQEYW/giphy.gif", // Hearts
                "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWlhNXdudndseHM3bjMwdjdwZ3VqcGE3dzZ4bGNqOTB4azBsa3FmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kEbhDhvPOWAEAaxakt/giphy.gif", // Romantic
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRvN3dlN3R1aWUza3NjNTU5Mzd0ZHh5eXN5emM3NHdpbWJjMmVjZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MaxyvTGAaIVWO7Xip0/giphy.gif"  // Love
            ];
            
            sweetGifs.forEach((gifUrl, index) => {
                const img = document.createElement('img');
                img.src = gifUrl;
                img.style.animationDelay = (index * 0.1) + 's'; // Staggered animation
                sweetGifsContainer.appendChild(img);
            });
        }

        // ==================== CONTINUOUS HEART RAIN ====================
        let heartRainInterval;
        
        function startContinuousHeartRain() {
            const hearts = ['💖', '💕', '💗', '💓', '💝', '❤️', '💘', '💞'];
            
            // Clear any existing interval
            if (heartRainInterval) {
                clearInterval(heartRainInterval);
            }
            
            // Create heart rain every 100ms
            heartRainInterval = setInterval(() => {
                for (let i = 0; i < 5; i++) { // 5 hearts at a time
                    const heart = document.createElement('div');
                    heart.className = 'heart-rain';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    
                    document.body.appendChild(heart);
                    
                    // Remove after animation
                    setTimeout(() => heart.remove(), 5000);
                }
            }, 100);
        }

        // ==================== EVENT LISTENERS ====================
        document.getElementById('anniversaryInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnniversary();
            }
        });

        // ==================== INITIALIZE ON PAGE LOAD ====================
        window.addEventListener('DOMContentLoaded', function() {
            populatePhotos();
            populateMessageMemes();
            createFloatingHearts();
        });
