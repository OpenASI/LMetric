from lmetric import lmetric_quant_matmul_Lx3HxH
import torch

def test_quant_matmul():
    if not torch.cuda.is_available():
        return
    lmetric_quant_matmul_Lx3HxH(hidden_sizes=[128])