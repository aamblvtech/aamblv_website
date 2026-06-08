<?php
/**
 * Dynamic Sitemap Generator (PHP version)
 * This can be used to dynamically generate sitemaps if needed
 * Place in public folder and access via /sitemap.php
 * 
 * Usage: Uncomment in .htaccess to rewrite sitemap.xml to sitemap.php
 * RewriteRule ^sitemap\.xml$ sitemap.php [L]
 */

header('Content-Type: application/xml; charset=utf-8');

$baseUrl = 'https://aamblvtech.in';

// Define pages with their update frequency and priority
$pages = [
    ['url' => '/', 'lastmod' => date('Y-m-d'), 'changefreq' => 'weekly', 'priority' => '1.0'],
    ['url' => '/about', 'lastmod' => date('Y-m-d'), 'changefreq' => 'monthly', 'priority' => '0.9'],
    ['url' => '/services', 'lastmod' => date('Y-m-d'), 'changefreq' => 'monthly', 'priority' => '0.9'],
    ['url' => '/portfolio', 'lastmod' => date('Y-m-d'), 'changefreq' => 'bi-weekly', 'priority' => '0.8'],
    ['url' => '/careers', 'lastmod' => date('Y-m-d'), 'changefreq' => 'weekly', 'priority' => '0.7'],
    ['url' => '/contact', 'lastmod' => date('Y-m-d'), 'changefreq' => 'monthly', 'priority' => '0.8'],
];

echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
<?php foreach ($pages as $page): ?>
    <url>
        <loc><?php echo htmlspecialchars($baseUrl . $page['url'], ENT_XML1, 'UTF-8'); ?></loc>
        <lastmod><?php echo $page['lastmod']; ?></lastmod>
        <changefreq><?php echo $page['changefreq']; ?></changefreq>
        <priority><?php echo $page['priority']; ?></priority>
    </url>
<?php endforeach; ?>
</urlset>