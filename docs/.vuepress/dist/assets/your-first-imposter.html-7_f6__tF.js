import{_ as s,o as n,c as t,e}from"./app-NlqJkyee.js";const o={},a=e(`<h1 id="your-first-imposter" tabindex="-1"><a class="header-anchor" href="#your-first-imposter" aria-hidden="true">#</a> Your first imposter</h1><p><strong>At least one imposter must be configured</strong> in order to use Killgrave.</p><p>Every file with any of the valid extensions (<code>.imp.json</code>, <code>.imp.yml</code> or <code>.imp.yaml</code>), present in the &quot;imposters&quot; folder (default <code>&quot;./imposters&quot;</code>) will be interpreted as an imposters file.</p><p>We use a rule-based system to match requests to imposters. Therefore, you have to organize your imposters <strong>from most restrictive to least</strong>.</p><p>Here&#39;s an example of the contents of an imposters file with a single imposter:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/gophers/01D8EMQ185CA8PRGE20DKZTGSR&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;data\\&quot;:{\\&quot;type\\&quot;:\\&quot;gophers\\&quot;,\\&quot;id\\&quot;:\\&quot;01D8EMQ185CA8PRGE20DKZTGSR\\&quot;,\\&quot;attributes\\&quot;:{\\&quot;name\\&quot;:\\&quot;Zebediah\\&quot;,\\&quot;color\\&quot;:\\&quot;Purples\\&quot;,\\&quot;age\\&quot;:55}}}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This a very simple example. Killgrave has more possibilities for configuring imposters.</p><p>You can take a look at some of them in the <strong>&quot;How to...?&quot;</strong> section below.</p><blockquote><p>⚠️Remember that you will need to escape any special char, in the properties that admit text.</p></blockquote>`,9),p=[a];function i(r,u){return n(),t("div",null,p)}const c=s(o,[["render",i],["__file","your-first-imposter.html.vue"]]);export{c as default};
