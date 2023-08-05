from lmetric import lmetric_matmul_fp16
import torch

def test_matmul_fp16():
    if not torch.cuda.is_available():
        return
    lmetric_matmul_fp16(sizes=[128])