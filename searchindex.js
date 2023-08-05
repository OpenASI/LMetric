Search.setIndex({"docnames": ["index", "lmetric", "lmetric.floating_ops", "lmetric.llm_prune", "lmetric.llm_quant", "lmetric.utils", "modules"], "filenames": ["index.rst", "lmetric.rst", "lmetric.floating_ops.rst", "lmetric.llm_prune.rst", "lmetric.llm_quant.rst", "lmetric.utils.rst", "modules.rst"], "titles": ["Welcome to lmetric\u2019s documentation!", "lmetric package", "lmetric.floating_ops package", "lmetric.llm_prune package", "lmetric.llm_quant package", "lmetric.utils package", "lmetric"], "terms": {"packag": [0, 6], "index": 0, "modul": [0, 6], "search": 0, "page": 0, "floating_op": [1, 6], "submodul": [1, 6], "lmetric_matmul": [1, 6], "lmetric_matmul_fp16": [1, 2], "matmul": [1, 2], "llm_prune": [1, 6], "lmetric_prune_matmul": [1, 6], "get_coo": [1, 3], "get_pt_spars": [1, 3], "lmetric_prune_matmul_lx3hxh": [1, 3], "llm_quant": [1, 6], "custom_autotun": [1, 6], "autotun": [1, 4], "prune_config": [1, 4], "run": [1, 4], "warmup": [1, 4], "matmul248_kernel_config_prun": [1, 4], "gptq_quant_linear": [1, 6], "quantlinear": [1, 4], "forward": [1, 4], "pack": [1, 4], "quantlinearfunct": [1, 4], "backward": [1, 4], "autotune_warmup_linear": [1, 4], "make_quant_linear": [1, 4], "matmul248": [1, 4], "transpose_matmul248": [1, 4], "lmetric_quant_matmul": [1, 6], "get_bnb_weight_st": [1, 4], "lmetric_quant_matmul_lx3hxh": [1, 4], "util": [1, 6], "hf_download": [1, 6], "download_hf_repo": [1, 5], "size": [2, 3, 4], "256": 2, "896": 2, "1536": 2, "2176": 2, "2816": 2, "3456": 2, "4096": [2, 3, 4], "metric": [2, 3, 4], "tflop": [2, 3, 4], "kernel": [2, 3, 4], "triton": [2, 4], "torch": [2, 3, 4], "sourc": [2, 3, 4, 5], "perform": [2, 4], "matrix": [2, 3, 4], "multipl": [2, 3, 4], "us": [2, 4, 5], "librari": 2, "fp16": [2, 4], "data": [2, 3, 4], "type": [2, 3, 4, 5], "paramet": [2, 3, 4, 5], "list": [2, 3, 4, 5], "matric": 2, "default": [2, 3, 4, 5], "i": [2, 4], "str": [2, 3, 4, 5], "measur": 2, "valid": 2, "option": [2, 3, 4, 5], "ar": [2, 4], "tbp": [2, 3, 4], "m": [2, 3, 4], "The": [2, 4], "we": 2, "test": 2, "return": [2, 3, 4, 5], "none": [2, 4, 5], "b": 2, "activ": 2, "x": [3, 4], "threshold": [3, 4], "0": [3, 4], "coo": 3, "spars": 3, "tensor": [3, 4], "represent": 3, "input": [3, 4], "base": [3, 4], "given": [3, 4], "float": [3, 4], "valu": [3, 4], "coosparsetensor": 3, "pytorch": 3, "csr": 3, "csc": 3, "bsr": 3, "bsc": 3, "seqlen": [3, 4], "128": [3, 4], "hidden_s": [3, 4], "2048": [3, 4], "dtype": [3, 4], "float16": [3, 4], "bnb_spars": 3, "ratio": 3, "5": 3, "comput": [3, 4], "prune": [3, 4], "oper": [3, 4], "int": [3, 4], "sequenc": [3, 4], "length": [3, 4], "hidden": [3, 4], "layer": 3, "torch_spars": 3, "mostli": 4, "same": 4, "few": 4, "chang": 4, "like": 4, "40": 4, "instead": 4, "100": 4, "class": 4, "fn": 4, "arg_nam": 4, "config": 4, "kei": 4, "reset_to_zero": 4, "prune_configs_bi": 4, "dict": 4, "nearest_power_of_two": 4, "bool": [4, 5], "fals": [4, 5], "iter": 4, "debug": 4, "kernelinterfac": 4, "kwarg": 4, "arg": 4, "decor": 4, "auto": 4, "tune": 4, "jit": 4, "d": 4, "function": 4, "highlight": 4, "python": 4, "code": 4, "block": 4, "meta": 4, "block_siz": 4, "num_warp": 4, "4": 4, "1024": 4, "8": 4, "x_size": 4, "two": 4, "abov": 4, "evalu": 4, "anytim": 4, "def": 4, "x_ptr": 4, "note": 4, "when": [4, 5], "all": 4, "configur": 4, "time": 4, "thi": 4, "mean": 4, "whatev": 4, "updat": 4, "To": 4, "avoid": 4, "undesir": 4, "behavior": 4, "you": 4, "can": 4, "argument": 4, "which": 4, "reset": 4, "provid": 4, "zero": 4, "befor": 4, "ani": 4, "object": 4, "name": [4, 5], "whose": 4, "trigger": 4, "field": 4, "perf_model": 4, "model": 4, "predic": 4, "differ": 4, "top_k": 4, "number": 4, "bench": 4, "early_config_prun": 4, "do": 4, "earli": 4, "eg": 4, "num_stag": 4, "It": 4, "take": 4, "its": 4, "narg": 4, "main": 4, "purpos": 4, "shrink": 4, "block_size_": 4, "correspond": 4, "dimens": 4, "smaller": 4, "bit": 4, "groupsiz": 4, "infeatur": 4, "outfeatur": 4, "bia": 4, "defin": 4, "everi": 4, "call": 4, "should": 4, "overridden": 4, "subclass": 4, "although": 4, "recip": 4, "pass": 4, "need": 4, "within": 4, "one": 4, "instanc": 4, "afterward": 4, "sinc": 4, "former": 4, "care": 4, "regist": 4, "hook": 4, "while": 4, "latter": 4, "silent": 4, "ignor": 4, "them": 4, "linear": 4, "scale": 4, "g_idx": 4, "static": 4, "ctx": 4, "grad_output": 4, "formula": 4, "differenti": 4, "mode": 4, "automat": 4, "alia": 4, "vjp": 4, "must": 4, "accept": 4, "context": 4, "first": 4, "follow": 4, "mani": 4, "output": 4, "non": 4, "were": 4, "each": 4, "gradient": 4, "w": 4, "r": 4, "t": 4, "If": 4, "an": 4, "requir": 4, "grad": 4, "just": 4, "retriev": 4, "save": [4, 5], "dure": 4, "also": 4, "ha": 4, "attribut": 4, "needs_input_grad": 4, "tupl": 4, "boolean": 4, "repres": 4, "whether": [4, 5], "e": 4, "g": 4, "have": 4, "true": 4, "qweight": 4, "qzero": 4, "maxq": 4, "There": 4, "wai": 4, "usag": 4, "1": 4, "combin": 4, "staticmethod": 4, "other": 4, "see": 4, "more": 4, "detail": 4, "2": 4, "separ": 4, "setup_context": 4, "longer": 4, "overrid": 4, "autograd": 4, "handl": 4, "set": 4, "up": 4, "extend": 4, "store": 4, "arbitrari": 4, "directli": 4, "though": 4, "current": 4, "enforc": 4, "compat": 4, "either": 4, "save_for_backward": 4, "thei": 4, "intend": 4, "equival": 4, "save_for_forward": 4, "jvp": 4, "transpos": 4, "pre": 4, "quantiz": 4, "weight": 4, "6": 4, "has_fp16_weight": 4, "memory_efficient_backward": 4, "construct": 4, "state": 4, "bnb_weight": 4, "dictionari": 4, "flag": 4, "indic": 4, "format": 4, "memori": 4, "effici": 4, "enabl": 4, "A": 4, "contain": 4, "6144": 4, "8192": 4, "10240": 4, "12288": 4, "14336": 4, "gptq": 4, "bnb_infer": 4, "benchmark": 4, "rang": 4, "group": 4, "repo_id": 5, "repo_typ": 5, "filenam": 5, "white_pattern": 5, "black_pattern": 5, "save_dir": 5, "save_with_symlink": 5, "revis": 5, "download": 5, "repositori": 5, "from": 5, "hug": 5, "face": 5, "hub": 5, "creat": 5, "snapshot": 5, "identifi": 5, "file": 5, "pattern": 5, "includ": 5, "exclud": 5, "directori": 5, "symlink": 5, "local": 5, "rais": 5, "someexcept": 5, "descript": 5, "except": 5, "exampl": 5, "nousresearch": 5, "llama2": 5, "7b": 5, "hf": 5, "subpackag": 6, "content": 6}, "objects": {"": [[1, 0, 0, "-", "lmetric"]], "lmetric": [[2, 0, 0, "-", "floating_ops"], [3, 0, 0, "-", "llm_prune"], [4, 0, 0, "-", "llm_quant"], [5, 0, 0, "-", "utils"]], "lmetric.floating_ops": [[2, 0, 0, "-", "lmetric_matmul"]], "lmetric.floating_ops.lmetric_matmul": [[2, 1, 1, "", "lmetric_matmul_fp16"], [2, 1, 1, "", "matmul"]], "lmetric.llm_prune": [[3, 0, 0, "-", "lmetric_prune_matmul"]], "lmetric.llm_prune.lmetric_prune_matmul": [[3, 1, 1, "", "get_coo"], [3, 1, 1, "", "get_pt_sparse"], [3, 1, 1, "", "lmetric_prune_matmul_Lx3HxH"]], "lmetric.llm_quant": [[4, 0, 0, "-", "custom_autotune"], [4, 0, 0, "-", "gptq_quant_linear"], [4, 0, 0, "-", "lmetric_quant_matmul"]], "lmetric.llm_quant.custom_autotune": [[4, 2, 1, "", "Autotuner"], [4, 1, 1, "", "autotune"], [4, 1, 1, "", "matmul248_kernel_config_pruner"]], "lmetric.llm_quant.custom_autotune.Autotuner": [[4, 3, 1, "", "prune_configs"], [4, 3, 1, "", "run"], [4, 3, 1, "", "warmup"]], "lmetric.llm_quant.gptq_quant_linear": [[4, 2, 1, "", "QuantLinear"], [4, 2, 1, "", "QuantLinearFunction"], [4, 1, 1, "", "autotune_warmup_linear"], [4, 1, 1, "", "make_quant_linear"], [4, 1, 1, "", "matmul248"], [4, 1, 1, "", "transpose_matmul248"]], "lmetric.llm_quant.gptq_quant_linear.QuantLinear": [[4, 3, 1, "", "forward"], [4, 3, 1, "", "pack"]], "lmetric.llm_quant.gptq_quant_linear.QuantLinearFunction": [[4, 3, 1, "", "backward"], [4, 3, 1, "", "forward"]], "lmetric.llm_quant.lmetric_quant_matmul": [[4, 1, 1, "", "get_bnb_weight_state"], [4, 1, 1, "", "lmetric_quant_matmul_Lx3HxH"]], "lmetric.utils": [[5, 0, 0, "-", "hf_download"]], "lmetric.utils.hf_download": [[5, 1, 1, "", "download_hf_repo"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"]}, "titleterms": {"welcom": 0, "lmetric": [0, 1, 2, 3, 4, 5, 6], "": 0, "document": 0, "content": [0, 1, 2, 3, 4, 5], "indic": 0, "tabl": 0, "packag": [1, 2, 3, 4, 5], "subpackag": 1, "modul": [1, 2, 3, 4, 5], "floating_op": 2, "submodul": [2, 3, 4, 5], "lmetric_matmul": 2, "llm_prune": 3, "lmetric_prune_matmul": 3, "llm_quant": 4, "custom_autotun": 4, "gptq_quant_linear": 4, "lmetric_quant_matmul": 4, "util": 5, "hf_download": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Welcome to lmetric\u2019s documentation!": [[0, "welcome-to-lmetric-s-documentation"]], "Contents:": [[0, null]], "Indices and tables": [[0, "indices-and-tables"]], "lmetric package": [[1, "lmetric-package"]], "Subpackages": [[1, "subpackages"]], "Module contents": [[1, "module-lmetric"], [2, "module-lmetric.floating_ops"], [3, "module-lmetric.llm_prune"], [4, "module-lmetric.llm_quant"], [5, "module-lmetric.utils"]], "lmetric.floating_ops package": [[2, "lmetric-floating-ops-package"]], "Submodules": [[2, "submodules"], [3, "submodules"], [4, "submodules"], [5, "submodules"]], "lmetric.floating_ops.lmetric_matmul module": [[2, "module-lmetric.floating_ops.lmetric_matmul"]], "lmetric.llm_prune package": [[3, "lmetric-llm-prune-package"]], "lmetric.llm_prune.lmetric_prune_matmul module": [[3, "module-lmetric.llm_prune.lmetric_prune_matmul"]], "lmetric.llm_quant package": [[4, "lmetric-llm-quant-package"]], "lmetric.llm_quant.custom_autotune module": [[4, "module-lmetric.llm_quant.custom_autotune"]], "lmetric.llm_quant.gptq_quant_linear module": [[4, "module-lmetric.llm_quant.gptq_quant_linear"]], "lmetric.llm_quant.lmetric_quant_matmul module": [[4, "module-lmetric.llm_quant.lmetric_quant_matmul"]], "lmetric.utils package": [[5, "lmetric-utils-package"]], "lmetric.utils.hf_download module": [[5, "module-lmetric.utils.hf_download"]], "lmetric": [[6, "lmetric"]]}, "indexentries": {"lmetric": [[1, "module-lmetric"]], "module": [[1, "module-lmetric"], [2, "module-lmetric.floating_ops"], [2, "module-lmetric.floating_ops.lmetric_matmul"], [3, "module-lmetric.llm_prune"], [3, "module-lmetric.llm_prune.lmetric_prune_matmul"], [4, "module-lmetric.llm_quant"], [4, "module-lmetric.llm_quant.custom_autotune"], [4, "module-lmetric.llm_quant.gptq_quant_linear"], [4, "module-lmetric.llm_quant.lmetric_quant_matmul"], [5, "module-lmetric.utils"], [5, "module-lmetric.utils.hf_download"]], "lmetric.floating_ops": [[2, "module-lmetric.floating_ops"]], "lmetric.floating_ops.lmetric_matmul": [[2, "module-lmetric.floating_ops.lmetric_matmul"]], "lmetric_matmul_fp16() (in module lmetric.floating_ops.lmetric_matmul)": [[2, "lmetric.floating_ops.lmetric_matmul.lmetric_matmul_fp16"]], "matmul() (in module lmetric.floating_ops.lmetric_matmul)": [[2, "lmetric.floating_ops.lmetric_matmul.matmul"]], "get_coo() (in module lmetric.llm_prune.lmetric_prune_matmul)": [[3, "lmetric.llm_prune.lmetric_prune_matmul.get_coo"]], "get_pt_sparse() (in module lmetric.llm_prune.lmetric_prune_matmul)": [[3, "lmetric.llm_prune.lmetric_prune_matmul.get_pt_sparse"]], "lmetric.llm_prune": [[3, "module-lmetric.llm_prune"]], "lmetric.llm_prune.lmetric_prune_matmul": [[3, "module-lmetric.llm_prune.lmetric_prune_matmul"]], "lmetric_prune_matmul_lx3hxh() (in module lmetric.llm_prune.lmetric_prune_matmul)": [[3, "lmetric.llm_prune.lmetric_prune_matmul.lmetric_prune_matmul_Lx3HxH"]], "autotuner (class in lmetric.llm_quant.custom_autotune)": [[4, "lmetric.llm_quant.custom_autotune.Autotuner"]], "quantlinear (class in lmetric.llm_quant.gptq_quant_linear)": [[4, "lmetric.llm_quant.gptq_quant_linear.QuantLinear"]], "quantlinearfunction (class in lmetric.llm_quant.gptq_quant_linear)": [[4, "lmetric.llm_quant.gptq_quant_linear.QuantLinearFunction"]], "autotune() (in module lmetric.llm_quant.custom_autotune)": [[4, "lmetric.llm_quant.custom_autotune.autotune"]], "autotune_warmup_linear() (in module lmetric.llm_quant.gptq_quant_linear)": [[4, "lmetric.llm_quant.gptq_quant_linear.autotune_warmup_linear"]], "backward() (lmetric.llm_quant.gptq_quant_linear.quantlinearfunction static method)": [[4, "lmetric.llm_quant.gptq_quant_linear.QuantLinearFunction.backward"]], "forward() (lmetric.llm_quant.gptq_quant_linear.quantlinear method)": [[4, "lmetric.llm_quant.gptq_quant_linear.QuantLinear.forward"]], "forward() (lmetric.llm_quant.gptq_quant_linear.quantlinearfunction static method)": [[4, "lmetric.llm_quant.gptq_quant_linear.QuantLinearFunction.forward"]], "get_bnb_weight_state() (in module lmetric.llm_quant.lmetric_quant_matmul)": [[4, "lmetric.llm_quant.lmetric_quant_matmul.get_bnb_weight_state"]], "lmetric.llm_quant": [[4, "module-lmetric.llm_quant"]], "lmetric.llm_quant.custom_autotune": [[4, "module-lmetric.llm_quant.custom_autotune"]], "lmetric.llm_quant.gptq_quant_linear": [[4, "module-lmetric.llm_quant.gptq_quant_linear"]], "lmetric.llm_quant.lmetric_quant_matmul": [[4, "module-lmetric.llm_quant.lmetric_quant_matmul"]], "lmetric_quant_matmul_lx3hxh() (in module lmetric.llm_quant.lmetric_quant_matmul)": [[4, "lmetric.llm_quant.lmetric_quant_matmul.lmetric_quant_matmul_Lx3HxH"]], "make_quant_linear() (in module lmetric.llm_quant.gptq_quant_linear)": [[4, "lmetric.llm_quant.gptq_quant_linear.make_quant_linear"]], "matmul248() (in module lmetric.llm_quant.gptq_quant_linear)": [[4, "lmetric.llm_quant.gptq_quant_linear.matmul248"]], "matmul248_kernel_config_pruner() (in module lmetric.llm_quant.custom_autotune)": [[4, "lmetric.llm_quant.custom_autotune.matmul248_kernel_config_pruner"]], "pack() (lmetric.llm_quant.gptq_quant_linear.quantlinear method)": [[4, "lmetric.llm_quant.gptq_quant_linear.QuantLinear.pack"]], "prune_configs() (lmetric.llm_quant.custom_autotune.autotuner method)": [[4, "lmetric.llm_quant.custom_autotune.Autotuner.prune_configs"]], "run() (lmetric.llm_quant.custom_autotune.autotuner method)": [[4, "lmetric.llm_quant.custom_autotune.Autotuner.run"]], "transpose_matmul248() (in module lmetric.llm_quant.gptq_quant_linear)": [[4, "lmetric.llm_quant.gptq_quant_linear.transpose_matmul248"]], "warmup() (lmetric.llm_quant.custom_autotune.autotuner method)": [[4, "lmetric.llm_quant.custom_autotune.Autotuner.warmup"]], "download_hf_repo() (in module lmetric.utils.hf_download)": [[5, "lmetric.utils.hf_download.download_hf_repo"]], "lmetric.utils": [[5, "module-lmetric.utils"]], "lmetric.utils.hf_download": [[5, "module-lmetric.utils.hf_download"]]}})