#!/bin/bash

# Ping Google
curl -s "https://www.google.com/ping?sitemap=https://aixontech.com/sitemap.xml" > /dev/null 2>&1

# Ping Bing
curl -s "https://www.bing.com/ping?sitemap=https://aixontech.com/sitemap.xml" > /dev/null 2>&1