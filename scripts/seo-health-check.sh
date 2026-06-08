#!/bin/bash
# SEO Health Check Script
# Run this script to check SEO health of your website

DOMAIN="https://aamblvtech.in"
REPORT_FILE="seo-health-report.txt"

echo "========================================" | tee $REPORT_FILE
echo "SEO Health Check Report" | tee -a $REPORT_FILE
echo "Domain: $DOMAIN" | tee -a $REPORT_FILE
echo "Date: $(date)" | tee -a $REPORT_FILE
echo "========================================" | tee -a $REPORT_FILE
echo "" | tee -a $REPORT_FILE

# Check robots.txt
echo "1. Checking robots.txt..." | tee -a $REPORT_FILE
if curl -s "$DOMAIN/robots.txt" | grep -q "Sitemap"; then
    echo "   ✓ robots.txt found and contains Sitemap" | tee -a $REPORT_FILE
else
    echo "   ✗ robots.txt missing or incomplete" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

# Check sitemap.xml
echo "2. Checking sitemap.xml..." | tee -a $REPORT_FILE
if curl -s "$DOMAIN/sitemap.xml" | grep -q "urlset"; then
    COUNT=$(curl -s "$DOMAIN/sitemap.xml" | grep -c "<url>")
    echo "   ✓ sitemap.xml found with $COUNT URLs" | tee -a $REPORT_FILE
else
    echo "   ✗ sitemap.xml missing or invalid" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

# Check 404 page
echo "3. Checking 404 page..." | tee -a $REPORT_FILE
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/nonexistent-page")
if [ "$STATUS" = "404" ]; then
    echo "   ✓ 404 page returns correct status code" | tee -a $REPORT_FILE
else
    echo "   ✗ 404 page returns status $STATUS (should be 404)" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

# Check HTTPS
echo "4. Checking HTTPS..." | tee -a $REPORT_FILE
if curl -s -o /dev/null -w "%{http_code}" "$DOMAIN" | grep -q "200\|301\|302"; then
    echo "   ✓ HTTPS is enabled" | tee -a $REPORT_FILE
else
    echo "   ✗ HTTPS may not be properly configured" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

# Check meta tags on homepage
echo "5. Checking meta tags..." | tee -a $REPORT_FILE
HTML=$(curl -s "$DOMAIN/")
if echo "$HTML" | grep -q "og:title"; then
    echo "   ✓ Open Graph tags found" | tee -a $REPORT_FILE
else
    echo "   ✗ Open Graph tags missing" | tee -a $REPORT_FILE
fi
if echo "$HTML" | grep -q "twitter:card"; then
    echo "   ✓ Twitter Card tags found" | tee -a $REPORT_FILE
else
    echo "   ✗ Twitter Card tags missing" | tee -a $REPORT_FILE
fi
if echo "$HTML" | grep -q "canonical"; then
    echo "   ✓ Canonical URL found" | tee -a $REPORT_FILE
else
    echo "   ✗ Canonical URL missing" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

# Check compression
echo "6. Checking GZIP compression..." | tee -a $REPORT_FILE
if curl -s -I "$DOMAIN" | grep -qi "content-encoding: gzip"; then
    echo "   ✓ GZIP compression enabled" | tee -a $REPORT_FILE
else
    echo "   ✗ GZIP compression not detected" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

# Check security headers
echo "7. Checking security headers..." | tee -a $REPORT_FILE
HEADERS=$(curl -s -I "$DOMAIN")
if echo "$HEADERS" | grep -qi "x-ua-compatible"; then
    echo "   ✓ X-UA-Compatible header found" | tee -a $REPORT_FILE
fi
if echo "$HEADERS" | grep -qi "x-content-type-options"; then
    echo "   ✓ X-Content-Type-Options header found" | tee -a $REPORT_FILE
fi
if echo "$HEADERS" | grep -qi "x-frame-options"; then
    echo "   ✓ X-Frame-Options header found" | tee -a $REPORT_FILE
fi
echo "" | tee -a $REPORT_FILE

echo "========================================" | tee -a $REPORT_FILE
echo "Report saved to $REPORT_FILE" | tee -a $REPORT_FILE
echo "========================================" | tee -a $REPORT_FILE