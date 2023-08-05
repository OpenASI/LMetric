from lmetric import lmetric_prune_matmul_Lx3HxH
import torch

def test_prune_matmul():
    if not torch.cuda.is_available():
        return
    lmetric_prune_matmul_Lx3HxH(hidden_sizes=[128])