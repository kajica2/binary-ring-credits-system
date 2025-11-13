/**
 * Test script for Binary Ring Webpage Generator
 * Run with: node test-generator.js
 */

const WebpageGenerator = require('./webpage-generator.js');
const fs = require('fs');
const path = require('path');

console.log('🔮 Binary Ring Webpage Generator - Test Suite\n');

// Initialize generator
const generator = new WebpageGenerator();
console.log('✓ Generator initialized successfully');

// Test 1: Generate E-commerce Page
console.log('\n📦 Test 1: Generating E-commerce Page...');
const ecommerceContext = [
    { name: 'Header Navigation', type: 'component', description: 'Site navigation' },
    { name: 'Hero Section', type: 'component', description: 'Main banner' },
    { name: 'Product Grid', type: 'component', description: 'Product display' },
    { name: 'Pricing Table', type: 'component', description: 'Pricing plans' },
    { name: 'Footer', type: 'component', description: 'Site footer' },
    { name: 'Dark Glassmorphism', type: 'style', description: 'Dark glass theme' },
    { name: 'e-commerce', type: 'keyword', description: 'Online shopping' }
];

const ecommercePage = generator.generatePage(ecommerceContext, 'E-commerce Store');
if (ecommercePage && ecommercePage.includes('<!DOCTYPE html>')) {
    console.log('✓ E-commerce page generated (' + (ecommercePage.length / 1024).toFixed(1) + ' KB)');
    fs.writeFileSync(path.join(__dirname, 'test-output-ecommerce.html'), ecommercePage);
    console.log('✓ Saved to test-output-ecommerce.html');
} else {
    console.log('✗ Failed to generate e-commerce page');
}

// Test 2: Generate Media Platform
console.log('\n📺 Test 2: Generating Media Platform...');
const mediaContext = [
    { name: 'Video Gallery', type: 'component', description: 'Video content' },
    { name: 'Audio Player', type: 'component', description: 'Music player' },
    { name: 'Photo Gallery', type: 'component', description: 'Image gallery' },
    { name: 'Cyberpunk Neon', type: 'style', description: 'Neon theme' }
];

const mediaPage = generator.generatePage(mediaContext, 'Media Platform');
if (mediaPage && mediaPage.includes('<!DOCTYPE html>')) {
    console.log('✓ Media platform page generated (' + (mediaPage.length / 1024).toFixed(1) + ' KB)');
    fs.writeFileSync(path.join(__dirname, 'test-output-media.html'), mediaPage);
    console.log('✓ Saved to test-output-media.html');
} else {
    console.log('✗ Failed to generate media platform page');
}

// Test 3: Generate Portfolio
console.log('\n🎨 Test 3: Generating Portfolio...');
const portfolioContext = [
    { name: 'Hero Section', type: 'component', description: 'Introduction' },
    { name: 'Photo Gallery', type: 'component', description: 'Portfolio work' },
    { name: 'Testimonials', type: 'component', description: 'Client reviews' },
    { name: 'Contact Form', type: 'component', description: 'Get in touch' },
    { name: 'Minimalist Clean', type: 'style', description: 'Clean design' }
];

const portfolioPage = generator.generatePage(portfolioContext, 'Creative Portfolio');
if (portfolioPage && portfolioPage.includes('<!DOCTYPE html>')) {
    console.log('✓ Portfolio page generated (' + (portfolioPage.length / 1024).toFixed(1) + ' KB)');
    fs.writeFileSync(path.join(__dirname, 'test-output-portfolio.html'), portfolioPage);
    console.log('✓ Saved to test-output-portfolio.html');
} else {
    console.log('✗ Failed to generate portfolio page');
}

// Test 4: Test all themes
console.log('\n🎨 Test 4: Testing All Themes...');
const themes = ['Dark Glassmorphism', 'Minimalist Clean', 'Cyberpunk Neon', 'Default'];
themes.forEach(theme => {
    const context = [
        { name: 'Hero Section', type: 'component', description: 'Hero banner' },
        { name: theme, type: 'style', description: 'Theme test' }
    ];
    const page = generator.generatePage(context, `${theme} Test`);
    if (page && page.includes('<!DOCTYPE html>')) {
        console.log(`✓ ${theme} theme working`);
    } else {
        console.log(`✗ ${theme} theme failed`);
    }
});

console.log('\n✨ Test suite completed!\n');
console.log('Generated test files:');
console.log('  - test-output-ecommerce.html');
console.log('  - test-output-media.html');
console.log('  - test-output-portfolio.html');
console.log('\nYou can open these files in your browser to see the results.');
