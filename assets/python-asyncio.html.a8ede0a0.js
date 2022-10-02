const e=JSON.parse('{"key":"v-64700dfa","path":"/code/language/python/python-asyncio.html","title":"Python\u5F02\u6B65I/O\u4E0E\u534F\u7A0B","lang":"zh-CN","frontmatter":{"title":"Python\u5F02\u6B65I/O\u4E0E\u534F\u7A0B","order":31,"category":["\u7B14\u8BB0","API"],"tag":["Python","\u5E76\u53D1","\u5F02\u6B65IO","\u534F\u7A0B"],"summary":"\u8FD9\u91CC\u5B9E\u9645\u4E0A\u5C31\u662F\u5B98\u65B9\u6587\u6863\u7684\u642C\u8FD0\uFF0C\u975E\u5E38\u4E0D\u5B8C\u6574\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u770B\u5B98\u65B9\u6587\u6863\u3002 asyncio \u2014 \u5F02\u6B65 I/O & \u534F\u7A0B \u534F\u7A0B\u8FD0\u884C\u7684\u539F\u7406\u89C1\uFF1A \u534F\u7A0B\u7684\u539F\u7406\u4EE5\u53CA\u4EE3\u7801 asyncio \u662F\u7528\u6765\u7F16\u5199 \xA0\u5E76\u53D1\xA0 \u4EE3\u7801\u7684\u5E93\uFF0C\u4F7F\u7528 \xA0async/await\xA0 \u8BED\u6CD5\u3002 asyncio \u88AB\u7528\u4F5C\u591A\u4E2A\u63D0\u4F9B\u9AD8\u6027\u80FD Python \u5F02\u6B65\u6846\u67B6\u7684\u57FA\u7840\uFF0C\u5305\u62EC\u7F51\u7EDC\u548C\u7F51\u7AD9\u670D\u52A1\uFF0C\u6570\u636E\u5E93\u8FDE\u63A5\u5E93\uFF0C\u5206\u5E03\u5F0F\u4EFB\u52A1\u961F\u5217\u7B49\u7B49\u3002","head":[["meta",{"property":"og:url","content":"https://timpcfan.site/code/language/python/python-asyncio.html"}],["meta",{"property":"og:site_name","content":"TrystanLei"}],["meta",{"property":"og:title","content":"Python\u5F02\u6B65I/O\u4E0E\u534F\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-02T16:52:25.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"\u5E76\u53D1"}],["meta",{"property":"article:tag","content":"\u5F02\u6B65IO"}],["meta",{"property":"article:tag","content":"\u534F\u7A0B"}],["meta",{"property":"article:modified_time","content":"2022-10-02T16:52:25.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"asyncio \u2014 \u5F02\u6B65 I/O & \u534F\u7A0B","slug":"asyncio-\u2014-\u5F02\u6B65-i-o-\u534F\u7A0B","children":[]},{"level":2,"title":"\u534F\u7A0B\u4E0E\u4EFB\u52A1","slug":"\u534F\u7A0B\u4E0E\u4EFB\u52A1","children":[{"level":3,"title":"\u534F\u7A0B","slug":"\u534F\u7A0B","children":[]},{"level":3,"title":"\u53EF\u7B49\u5F85\u5BF9\u8C61 awaitable objects","slug":"\u53EF\u7B49\u5F85\u5BF9\u8C61-awaitable-objects","children":[]},{"level":3,"title":"\u534F\u7A0B","slug":"\u534F\u7A0B-1","children":[]},{"level":3,"title":"\u4EFB\u52A1","slug":"\u4EFB\u52A1","children":[]},{"level":3,"title":"Futures","slug":"futures","children":[]},{"level":3,"title":"\u8FD0\u884C asyncio \u7A0B\u5E8F","slug":"\u8FD0\u884C-asyncio-\u7A0B\u5E8F","children":[]},{"level":3,"title":"\u521B\u5EFA\u4EFB\u52A1","slug":"\u521B\u5EFA\u4EFB\u52A1","children":[]},{"level":3,"title":"\u4F11\u7720","slug":"\u4F11\u7720","children":[]},{"level":3,"title":"\u5E76\u53D1\u8FD0\u884C\u4EFB\u52A1","slug":"\u5E76\u53D1\u8FD0\u884C\u4EFB\u52A1","children":[]},{"level":3,"title":"\u5C4F\u853D\u53D6\u6D88\u64CD\u4F5C","slug":"\u5C4F\u853D\u53D6\u6D88\u64CD\u4F5C","children":[]},{"level":3,"title":"\u8D85\u65F6","slug":"\u8D85\u65F6","children":[]},{"level":3,"title":"\u7B80\u5355\u7B49\u5F85","slug":"\u7B80\u5355\u7B49\u5F85","children":[]},{"level":3,"title":"\u5728\u7EBF\u7A0B\u4E2D\u8FD0\u884C","slug":"\u5728\u7EBF\u7A0B\u4E2D\u8FD0\u884C","children":[]},{"level":3,"title":"\u8DE8\u7EBF\u7A0B\u8C03\u5EA6","slug":"\u8DE8\u7EBF\u7A0B\u8C03\u5EA6","children":[]},{"level":3,"title":"\u5185\u7701","slug":"\u5185\u7701","children":[]},{"level":3,"title":"Task \u5BF9\u8C61","slug":"task-\u5BF9\u8C61","children":[]}]},{"level":2,"title":"Stream \u6D41","slug":"stream-\u6D41","children":[{"level":3,"title":"Stream \u51FD\u6570","slug":"stream-\u51FD\u6570","children":[]},{"level":3,"title":"Unix \u5957\u63A5\u5B57\uFF08Socket\uFF09","slug":"unix-\u5957\u63A5\u5B57-socket","children":[]},{"level":3,"title":"StreamReader \u4E0E StreamWriter","slug":"streamreader-\u4E0E-streamwriter","children":[]},{"level":3,"title":"\u4F8B\u5B50\uFF1Aecho \u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF","slug":"\u4F8B\u5B50-echo-\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF","children":[]}]},{"level":2,"title":"\u540C\u6B65\u539F\u8BED","slug":"\u540C\u6B65\u539F\u8BED","children":[{"level":3,"title":"Lock","slug":"lock","children":[]},{"level":3,"title":"Event","slug":"event","children":[]},{"level":3,"title":"Condition","slug":"condition","children":[]},{"level":3,"title":"Semaphore","slug":"semaphore","children":[]},{"level":3,"title":"BoundedSemaphore","slug":"boundedsemaphore","children":[]}]},{"level":2,"title":"\u961F\u5217\u96C6\u5408","slug":"\u961F\u5217\u96C6\u5408","children":[{"level":3,"title":"Queue","slug":"queue","children":[]},{"level":3,"title":"\u4F18\u5148\u7EA7\u961F\u5217","slug":"\u4F18\u5148\u7EA7\u961F\u5217","children":[]},{"level":3,"title":"\u540E\u8FDB\u5148\u51FA\u961F\u5217","slug":"\u540E\u8FDB\u5148\u51FA\u961F\u5217","children":[]},{"level":3,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","children":[]}]},{"level":2,"title":"\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E8B\u4EF6\u5FAA\u73AF","children":[{"level":3,"title":"\u524D\u8A00","slug":"\u524D\u8A00","children":[]}]},{"level":2,"title":"\u9AD8\u5C42\u7EA7 API \u7D22\u5F15","slug":"\u9AD8\u5C42\u7EA7-api-\u7D22\u5F15","children":[{"level":3,"title":"\u4EFB\u52A1","slug":"\u4EFB\u52A1-1","children":[]},{"level":3,"title":"\u961F\u5217\u96C6","slug":"\u961F\u5217\u96C6","children":[]},{"level":3,"title":"\u5B50\u8FDB\u7A0B\u96C6","slug":"\u5B50\u8FDB\u7A0B\u96C6","children":[]},{"level":3,"title":"\u6D41","slug":"\u6D41","children":[]},{"level":3,"title":"\u540C\u6B65","slug":"\u540C\u6B65","children":[]},{"level":3,"title":"\u5F02\u5E38","slug":"\u5F02\u5E38","children":[]}]},{"level":2,"title":"\u5173\u4E8E never-awaited \u534F\u7A0B","slug":"\u5173\u4E8E-never-awaited-\u534F\u7A0B","children":[]}],"git":{"createdTime":1664729545000,"updatedTime":1664729545000,"contributors":[{"name":"timpcfan","email":"lztsmail@gmail.com","commits":1}]},"readingTime":{"minutes":23.19,"words":6956},"filePathRelative":"code/language/python/python-asyncio.md","localizedDate":"2022\u5E7410\u67082\u65E5"}');export{e as data};
