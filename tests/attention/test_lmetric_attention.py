from lmetric import lmetric_attention
import torch

def test_matmul_fp16():
    if not torch.cuda.is_available():
        return
    lmetric_attention()