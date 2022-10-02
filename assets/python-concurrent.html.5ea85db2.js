const e=JSON.parse('{"key":"v-2e67d314","path":"/code/language/python/python-concurrent.html","title":"Python\u5E76\u53D1\u7F16\u7A0B","lang":"zh-CN","frontmatter":{"title":"Python\u5E76\u53D1\u7F16\u7A0B","order":29,"category":["\u7B14\u8BB0","API"],"tag":["Python","\u5E76\u53D1"],"summary":"\u591A\u8FDB\u7A0B\u7A0B\u5E8F\u4F8B\u5B50 Python \u4E2D\u7684\u4E09\u79CD\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F \u4E09\u79CD\u65B9\u5F0F\uFF1A\u591A\u7EBF\u7A0B\uFF08Thread\uFF09\u3001\u591A\u8FDB\u7A0B\uFF08Process\uFF09\u3001\u534F\u7A0B\uFF08Coroutine\uFF09 \u4EC0\u4E48\u662F CPU \u5BC6\u96C6\u578B\u8BA1\u7B97\u3001IO \u5BC6\u96C6\u578B\u8BA1\u7B97 CPU \u5BC6\u96C6\u578B\u8BA1\u7B97\uFF08CPU-bound\uFF09\uFF1A; \u4F8B\u5982\uFF1A\u538B\u7F29\u89E3\u538B\u7F29\u3001\u52A0\u5BC6\u89E3\u5BC6; IO \u5BC6\u96C6\u578B\u8BA1\u7B97\uFF08I/O bound\uFF09\uFF1A; \u722C\u866B\u3001\u6587\u4EF6\u5904\u7406\u7B49; \u591A\u7EBF\u7A0B\u3001\u591A\u8FDB\u7A0B\u3001\u534F\u7A0B\u7684\u5BF9\u6BD4 \u591A\u8FDB\u7A0B","head":[["meta",{"property":"og:url","content":"https://timpcfan.site/code/language/python/python-concurrent.html"}],["meta",{"property":"og:site_name","content":"TrystanLei"}],["meta",{"property":"og:title","content":"Python\u5E76\u53D1\u7F16\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-02T16:52:25.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"\u5E76\u53D1"}],["meta",{"property":"article:modified_time","content":"2022-10-02T16:52:25.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u591A\u8FDB\u7A0B\u7A0B\u5E8F\u4F8B\u5B50","slug":"\u591A\u8FDB\u7A0B\u7A0B\u5E8F\u4F8B\u5B50","children":[]},{"level":2,"title":"Python \u4E2D\u7684\u4E09\u79CD\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F","slug":"python-\u4E2D\u7684\u4E09\u79CD\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F","children":[{"level":3,"title":"\u4E09\u79CD\u65B9\u5F0F\uFF1A\u591A\u7EBF\u7A0B\uFF08Thread\uFF09\u3001\u591A\u8FDB\u7A0B\uFF08Process\uFF09\u3001\u534F\u7A0B\uFF08Coroutine\uFF09","slug":"\u4E09\u79CD\u65B9\u5F0F-\u591A\u7EBF\u7A0B-thread-\u3001\u591A\u8FDB\u7A0B-process-\u3001\u534F\u7A0B-coroutine","children":[]},{"level":3,"title":"\u4EC0\u4E48\u662F CPU \u5BC6\u96C6\u578B\u8BA1\u7B97\u3001IO \u5BC6\u96C6\u578B\u8BA1\u7B97","slug":"\u4EC0\u4E48\u662F-cpu-\u5BC6\u96C6\u578B\u8BA1\u7B97\u3001io-\u5BC6\u96C6\u578B\u8BA1\u7B97","children":[]},{"level":3,"title":"\u591A\u7EBF\u7A0B\u3001\u591A\u8FDB\u7A0B\u3001\u534F\u7A0B\u7684\u5BF9\u6BD4","slug":"\u591A\u7EBF\u7A0B\u3001\u591A\u8FDB\u7A0B\u3001\u534F\u7A0B\u7684\u5BF9\u6BD4","children":[]},{"level":3,"title":"\u600E\u6837\u6839\u636E\u4EFB\u52A1\u9009\u62E9\u5BF9\u5E94\u6280\u672F","slug":"\u600E\u6837\u6839\u636E\u4EFB\u52A1\u9009\u62E9\u5BF9\u5E94\u6280\u672F","children":[]}]},{"level":2,"title":"\u5168\u5C40\u89E3\u91CA\u5668\u9501 GIL\uFF08Global Interpreter Lock\uFF09","slug":"\u5168\u5C40\u89E3\u91CA\u5668\u9501-gil-global-interpreter-lock","children":[]},{"level":2,"title":"Python \u591A\u7EBF\u7A0B\u4EE3\u7801","slug":"python-\u591A\u7EBF\u7A0B\u4EE3\u7801","children":[{"level":3,"title":"\u76F4\u63A5\u521B\u5EFA\u7EBF\u7A0B","slug":"\u76F4\u63A5\u521B\u5EFA\u7EBF\u7A0B","children":[]},{"level":3,"title":"\u4F7F\u7528\u7EBF\u7A0B\u6C60ThreadPoolExecutor","slug":"\u4F7F\u7528\u7EBF\u7A0B\u6C60threadpoolexecutor","children":[]}]},{"level":2,"title":"Python \u591A\u8FDB\u7A0B\u4EE3\u7801","slug":"python-\u591A\u8FDB\u7A0B\u4EE3\u7801","children":[{"level":3,"title":"\u591A\u8FDB\u7A0B\u4F18\u96C5\u9000\u51FA","slug":"\u591A\u8FDB\u7A0B\u4F18\u96C5\u9000\u51FA","children":[]}]},{"level":2,"title":"\u7EBF\u7A0B\u6C60\u539F\u7406","slug":"\u7EBF\u7A0B\u6C60\u539F\u7406","children":[{"level":3,"title":"\u7EBF\u7A0B\u6C60\u7684\u539F\u7406","slug":"\u7EBF\u7A0B\u6C60\u7684\u539F\u7406","children":[]},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9","children":[]},{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9","children":[]}]},{"level":2,"title":"\u534F\u7A0B\u7684\u539F\u7406\u4EE5\u53CA\u4EE3\u7801","slug":"\u534F\u7A0B\u7684\u539F\u7406\u4EE5\u53CA\u4EE3\u7801","children":[{"level":3,"title":"\u534F\u7A0B\u7684\u539F\u7406","slug":"\u534F\u7A0B\u7684\u539F\u7406","children":[]},{"level":3,"title":"\u534F\u7A0B\u7684\u4F7F\u7528\u4EE5\u53CA\u5F02\u6B65 IO","slug":"\u534F\u7A0B\u7684\u4F7F\u7528\u4EE5\u53CA\u5F02\u6B65-io","children":[]},{"level":3,"title":"\u534F\u7A0B\u5E76\u53D1\u5EA6\u7684\u63A7\u5236","slug":"\u534F\u7A0B\u5E76\u53D1\u5EA6\u7684\u63A7\u5236","children":[]}]},{"level":2,"title":"\u4FE1\u53F7\u91CF Semaphore","slug":"\u4FE1\u53F7\u91CF-semaphore","children":[]}],"git":{"createdTime":1664729545000,"updatedTime":1664729545000,"contributors":[{"name":"timpcfan","email":"lztsmail@gmail.com","commits":1}]},"readingTime":{"minutes":6.62,"words":1985},"filePathRelative":"code/language/python/python-concurrent.md","localizedDate":"2022\u5E7410\u67082\u65E5"}');export{e as data};
