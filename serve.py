#!/usr/bin/env python3
"""온니버스 로컬 미리보기 서버 — 항상 최신 파일을 보여주도록 캐시를 끕니다."""
import http.server
import functools
import os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 4173))
    handler = functools.partial(NoCacheHandler, directory='/Users/kyle/onniverse-web')
    http.server.ThreadingHTTPServer(('', port), handler).serve_forever()
